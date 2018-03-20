class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    @articles = Article.published.decorate
  end
end
