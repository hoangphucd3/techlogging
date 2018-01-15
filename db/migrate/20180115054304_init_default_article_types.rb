class InitDefaultArticleTypes < ActiveRecord::Migration[5.1]
  def change
    built_in_article_types = {
      articles: 'Articles',
      videos: 'Videos',
      downloads: 'Downloads',
      pictures: 'Pictures'
    }
    built_in_article_types.each do |type_name, type_desc|
      ArticleType.create(name: type_name, description: type_desc)
    end
  end
end
