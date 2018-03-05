module Api
  class ArticlesController < ::ApplicationController
    protect_from_forgery with: :null_session

    def create
      render json: 'success'
    end
  end
end
