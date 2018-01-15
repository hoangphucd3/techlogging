class ArticleType < ApplicationRecord
  has_many :articles, dependent: :destroy
end
