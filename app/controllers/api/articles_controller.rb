module Api
  class ArticlesController < ::ApplicationController
    protect_from_forgery with: :null_session

    def create
      # Post params: post_id
      render json: 'success'
    end
  end
end
