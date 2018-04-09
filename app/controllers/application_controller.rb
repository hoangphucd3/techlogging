class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    @articles = Article.published
                       .order(created_at: :desc)
                       .page(params[:page])
                       .decorate
  end
end
