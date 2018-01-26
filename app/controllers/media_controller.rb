class MediaController < ApplicationController
  layout false

  # rubocop:disable Metrics/MethodLength
  # rubocop:disable Metrics/AbcSize
  def async_upload
    attachment = Photo.create(image: params['async-upload'])
    if attachment.errors.any?
      json_response = { success: false,
                        data: {
                          message: attachment.errors.full_messages.join(', '),
                          filename: attachment.image.original_filename
                        } }
    else
      json_response = { success: true,
                        data: attachment.attachment_js }
    end
    response.headers['Content-Length'] = json_response.to_json.size
    render json: json_response, status: 200
  end
  # rubocop:enable Metrics/MethodLength
  # rubocop:enable Metrics/AbcSize

  def ajax_handle
    case params[:media_action]
    when 'delete-post'
      delete_attachment
    when 'send-attachment-to-editor'
      return send_to_editor
    end
    query_attachments
  end

  private

  def send_to_editor
    attachment = Photo.find_by(id: params[:attachment][:id])
    image_size = params[:attachment]['image-size']
    render json: {
      success: true,
      data: attachment.editor_render(image_size)
    }, status: 200
  end

  def query_attachments
    attachments = Photo.all.order(id: :desc).map(&:attachment_js)
    json_response = { success: true, data: attachments }
    response.headers['Content-Length'] = json_response.to_json.size
    render json: json_response, status: 200
  end

  def delete_attachment
    attachment = Photo.find_by(id: params[:id])
    attachment.destroy
  end
end
