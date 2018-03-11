module Api
  class ArticlesController < ::ApplicationController
    protect_from_forgery with: :null_session

    def create
      WpPost.create!(article_params)
      render json: 'success'
    end

    private

    def article_params
      params.permit(:title, :slug, :api_id)
            .merge(status: article_status[params[:status].to_sym])
    end

    def article_status
      { 'publish': 1 }
    end
  end
end
