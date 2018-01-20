class MediaController < ApplicationController
  include ActionView::Helpers::NumberHelper
  skip_before_action :verify_authenticity_token

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
      data: attachment_js(attachment)
    }, status: 200
  end

  def ajax_handle
    attachments = Photo.all.map { |attachment| attachment_js(attachment) }.first
    render json: { success: true, data: attachments }, status: 200
  end

  private

  # rubocop:disable Metrics/AbcSize
  # rubocop:disable Metrics/LineLength
  def attachment_js(attachment)
    {
      id: attachment.id,
      type: 'image',
      subtype: 'jpeg',
      title: 'test',
      link: 'google.com',
      filename: attachment.image[:original].original_filename,
      dateFormatted: attachment.created_at.to_s,
      filesizeHumanReadable: number_to_human_size(attachment.image[:original].size),
      date: (Time.now.to_f * 1000).to_i,
      modified: (Time.now.to_f * 1000).to_i,
      width: attachment.image[:original].width,
      heigth: attachment.image[:original].height,
      url: 'http://localhost:3000' + attachment.image[:original].url,
      nonces: {
        update: '123',
        edit: '123',
        delete: '123'
      },
      sizes: {
        'original': {
          width: attachment.image[:original].width,
          heigth: attachment.image[:original].height,
          url: 'http://localhost:3000' + attachment.image[:original].url
        },
        'thumbnail': {
          width: attachment.image[:thumbnail].width,
          heigth: attachment.image[:thumbnail].height,
          url: 'http://localhost:3000' + attachment.image[:thumbnail].url
        }
      }
    }
  end
  # rubocop:enable Metrics/AbcSize
  # rubocop:enable Metrics/LineLength
end
