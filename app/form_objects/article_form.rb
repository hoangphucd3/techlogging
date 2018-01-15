class ArticleForm
  include ActiveModel::Model

  attr_accessor(:title,
                :description,
                :content,
                :status,
                :feature_photo,
                :feature_photo_data,
                :taxonomy_term_relationship_ids)

  def initialize(params, article_id = nil)
    @article_params = parse_article_params(params)
    @article = Article.find_by(id: article_id) if article_id.present?
    super(params)
  end

  def save
    article = article_data
    return article if article.invalid?
    article.save
    assign_terms(article)
    article
  end

  def article_data
    article = @article || Article.new(@article_params)
    article.assign_attributes(@article_params) if @article.present?
    # Currently set to article type
    article.article_type = ArticleType.find_by(id: 1)
    article
  end

  def term_ids
    taxonomy_term_relationship_ids.reject(&:blank?)
  end

  private

  def parse_article_params(params)
    exclude_params = %w[taxonomy_term_relationship_ids]
    params.reject { |k, _v| exclude_params.include?(k) }
  end

  # @article Article
  def assign_terms(article)
    term_ids.each { |term_id| article.build_term(term_id) }
    article.remove_orphan_terms(term_ids)
  end
end
