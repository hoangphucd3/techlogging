module Admin
  # ArticlesController
  class ArticlesController < BaseController
    def index
      @articles = Article.all
    end

    def new
      @article = Article.new
    end

    def create
      @article = Article.new(article_params)
      return render action: :new if @article.invalid?
      @article.save
      redirect_to action: :index
    end

    def edit
      @article = Article.find_by(id: params[:id])
    end

    def update
      @article = Article.find_by(params[:id])
      @article.assign_attributes(article_params)
      return render action: :edit if @article.invalid?
      @article.save
      redirect_to action: :index
    end

    def destroy
      article = Article.find_by(id: params[:id])
      article.destroy
      redirect_to action: :index
    end

    private

    def article_params
      params.require(:article).permit!
    end
  end
end
