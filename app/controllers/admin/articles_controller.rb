module Admin
  # ArticlesController
  class ArticlesController < BaseController
    def index
      @articles = Article.all
    end

    def show
      @article = Article.new(article_params)
    end

    def new
      @article = Article.new
    end

    def create
      article = Article.new(article_params)
      article.save
      redirect_to action: :index
    end

    def edit
      @article = Article.find_by(id: params[:id])
    end

    def update
      Article.update(article_params)
      redirect_to action: :index
    end

    def destroy
      article = Article.find_by(id: params[:id])
      article.destroy
      redirect_to action: :index
    end

    private

    def article_params
      params.require(:article).permit(:title, :description, :content)
    end
  end
end
