class MediaController < ApplicationController
  layout false
  include ActionView::Helpers::NumberHelper
  skip_before_action :verify_authenticity_token
  before_action :add_allow_credentials_headers

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
    attachments = Photo.all.map { |attachment| attachment_js(attachment) }
    # render json: { success: true, data: attachments }, status: 200
    # render text: render_to_string('test',
    #                               layout: false,
    #                               formats: [:html])
    response.headers['Content-Type'] = 'application/json; charset=UTF-8'
    response.headers['Transfer-Encoding'] = 'identity'
    # render 'media/ajax_handle'
    render json: { success: true, data: attachments }, status: 200
  end

  private

  def add_allow_credentials_headers
    response.headers['Access-Control-Allow-Origin'] = request.headers['Origin'] || '*' # the domain you're making the request from
    response.headers['Access-Control-Allow-Credentials'] = 'true'
    response.headers['Access-Control-Allow-Headers'] = 'accept, content-type'
  end

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
      filesizeInBytes: attachment.image[:original].size,
      filesizeHumanReadable: number_to_human_size(attachment.image[:original].size),
      context: '',
      date: (Time.now.to_f * 1000).to_i,
      modified: (Time.now.to_f * 1000).to_i,
      width: attachment.image[:original].width,
      heigth: attachment.image[:original].height,
      url: 'http://localhost:3000' + attachment.image[:original].url,
      nonces: {
        delete: 'true'
      },
      sizes: {
        'original': {
          width: attachment.image[:original].width,
          heigth: attachment.image[:original].height,
          url: 'http://localhost:3000' + attachment.image[:original].url,
          orientation: ''
        },
        'medium': {
          width: attachment.image[:thumbnail].width,
          heigth: attachment.image[:thumbnail].height,
          url: 'http://localhost:3000' + attachment.image[:thumbnail].url,
          orientation: ''
        }
      }
    }
  end
  # rubocop:enable Metrics/AbcSize
  # rubocop:enable Metrics/LineLength
end
