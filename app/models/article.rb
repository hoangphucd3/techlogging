class Article < ApplicationRecord
  include ImageUploader::Attachment.new(:feature_photo)

  validates :title, presence: true
end
