module Admin
  class ArticlesController < BaseController
    def index
      @articles = Article.all
    end

    def new
      @article = Article.new
    end

    def create
      @article = ArticleForm.new(article_params)
      @article = @article.save
      return render action: :new if @article.invalid?
      flash[:success] = 'Create article successfully'
      redirect_to action: :index
    end

    def edit
      @article = Article.find_by(id: params[:id])
    end

    def update
      @article = ArticleForm.new(article_params, params[:id])
      @article = @article.save
      return render action: :edit if @article.invalid?
      flash[:success] = 'Update article successfully'
      redirect_to action: :index
    end

    def destroy
      article = Article.find_by(id: params[:id])
      article.destroy
      redirect_to action: :index
    end

    private

    def article_params
      params.require(:article).permit(:title,
                                      :description,
                                      :content,
                                      :feature_photo,
                                      :status,
                                      taxonomy_term_relationship_ids: [])
    end
  end
end
