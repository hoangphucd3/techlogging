class ArticlesController < ApplicationController
  def index
    @articles = Article.published
  end

  def show
    unless Article.friendly.exists?(params[:id])
      return render 'layouts/404',
                    layout: false,
                    status: 404
    end
    @article = Article.friendly.find(params[:id])
  end
end
