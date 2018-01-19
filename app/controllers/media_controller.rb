class MediaController < ApplicationController
  include ActionView::Helpers::NumberHelper
  skip_before_action :verify_authenticity_token

  # rubocop:disable Metrics/AbcSize
  # rubocop:disable Metrics/LineLength
  def async_upload
    attachment = Photo.create(image: params['async-upload'])
    if attachment.errors.any?
      return render json: { success: false,
                            data: {
                              message: attachment.errors.full_messages.join(', '),
                              filename: attachment.image.original_filename
                            } }, status: 200
    end
    render json: {
      success: true,
      data: {
        id: attachment.id,
        type: 'image',
        filename: attachment.image[:original].original_filename,
        dateFormatted: attachment.created_at.to_s,
        filesizeHumanReadable: number_to_human_size(attachment.image[:original].size),
        width: attachment.image[:original].width,
        heigth: attachment.image[:original].height,
        url: attachment.image[:original].url,
        sizes: {
          'original': {
            width: attachment.image[:original].url,
            heigth: attachment.image[:original].height,
            url: attachment.image[:original].url
          },
          'thumbnail': {
            width: attachment.image[:thumbnail].url,
            heigth: attachment.image[:thumbnail].height,
            url: attachment.image[:thumbnail].url
          }
        }
      }
    }, status: 200
  end
  # rubocop:enable Metrics/AbcSize
  # rubocop:enable Metrics/LineLength
end
