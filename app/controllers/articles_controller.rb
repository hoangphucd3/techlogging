# frozen_string_literal: true

class ArticlesController < ApplicationController
  def index
    @articles = Article.published
                       .order(created_at: :desc)
                       .page(params[:page])
                       .decorate
  end

  def show
    unless Article.friendly.exists?(params[:id])
      return render 'layouts/404',
                    layout: false,
                    status: 404
    end
    @article = Article.friendly.find(params[:id]).decorate
  end
end
