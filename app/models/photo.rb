require "image_processing/mini_magick"
require './uploaders/image_uploader'

class Photo < ApplicationRecord
  include ImageUploader::Attachment.new(:image)
end
