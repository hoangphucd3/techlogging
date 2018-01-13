require 'image_processing/mini_magick'

class ImageUploader < Shrine
  # Use MiniMagick to process image versions
  include ImageProcessing::MiniMagick

  ALLOWED_TYPES = %w[image/jpeg image/png]

  # The remove_attachment plugin allows you to delete attachments through checkboxes on the web form.
  plugin :remove_attachment
  # The pretty_location plugin attempts to generate a nicer folder structure for uploaded files.
  plugin :pretty_location
  # Allows you to define processing performed for a specific action.
  plugin :processing
  # The versions plugin enables your uploader to deal with versions, by allowing you to return a Hash of files when processing.
  plugin :versions
  # The validation_helpers plugin provides helper methods for validating attached files.
  plugin :validation_helpers
  # The store_dimensions plugin extracts and stores dimensions of the uploaded image using the fastimage gem, which has built-in protection against image bombs.
  plugin :store_dimensions
  # The delete_raw plugin will automatically delete raw files that have been uploaded. This is especially useful when doing processing, to ensure that temporary files have been deleted after upload.
  plugin :delete_raw
  # The cached_attachment_data plugin adds the ability to retain the cached file across form redisplays, which means the file doesn't have to be reuploaded in case of validation errors.
  plugin :cached_attachment_data

  # Define validations
  # For a complete list of all validation helpers, see AttacherMethods. http://shrinerb.com/rdoc/classes/Shrine/Plugins/ValidationHelpers/AttacherMethods.html
  Attacher.validate do
    validate_mime_type_inclusion ALLOWED_TYPES
  end

  # Process additional versions in background.
  process(:store) do |io, context|
    original = io.download

    thumbnail = resize_to_fit!(original, 270, 203)

    { original: io, thumbnail: thumbnail }
  end
end
