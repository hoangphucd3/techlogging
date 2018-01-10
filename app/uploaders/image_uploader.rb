class ImageUploader < Shrine
  include ImageProcessing::MiniMagick

  ALLOWED_TYPES = %w[image/jpeg image/png]

  plugin :remove_attachment
  plugin :pretty_location
  plugin :processing
  plugin :versions
  plugin :validation_helpers
  plugin :store_dimensions
end
