class Photo < ApplicationRecord
  include ActionView::Helpers::NumberHelper
  include ImageUploader::Attachment.new(:image)

  # @TODO: Move to view
  # rubocop:disable Metrics/AbcSize
  # rubocop:disable Metrics/MethodLength
  def editor_render(image_attrs)
    image_size = image_attrs['image-size'].to_sym
    image_obj = image[image_size]
    image_url = Settings.site_url + image[image_size].url
    {
      size: image_attrs['image-size'],
      url: image_url,
      alt: image_attrs['image_alt'],
      caption: image_attrs['post_excerpt'],
      width: image_obj.width,
      height: image_obj.height,
      align: "pull-#{image_attrs['align']}"
    }
  end
  # rubocop:enable Metrics/AbcSize
  # rubocop:enable Metrics/MethodLength

  # rubocop:disable Metrics/AbcSize
  # rubocop:disable Metrics/MethodLength
  # @TODO: Fix problem about title contains special characters like Japanese
  # @TODO: Move to view
  def attachment_js
    {
      id: id,
      type: 'image',
      subtype: image[:original].extension,
      mime: image[:original].mime_type,
      title: image[:original].original_filename,
      filename: image[:original].original_filename,
      dateFormatted: created_at.to_s,
      filesizeInBytes: image[:original].size,
      filesizeHumanReadable: number_to_human_size(image[:original].size),
      date: Time.parse(created_at.to_s).to_i * 1000,
      modified: Time.parse(updated_at.to_s).to_i * 1000,
      width: image[:original].width,
      height: image[:original].height,
      url: image[:original].url,
      nonces: {
        delete: 'delete'
      },
      context: '',
      sizes: {
        'original': {
          width: image[:original].width,
          height: image[:original].height,
          url: image[:original].url
        },
        'thumbnail': {
          width: image[:thumbnail].width,
          height: image[:thumbnail].height,
          url: image[:thumbnail].url
        }
      }
    }
  end
  # rubocop:enable Metrics/AbcSize
  # rubocop:enable Metrics/MethodLength
end
