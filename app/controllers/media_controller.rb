class MediaController < ApplicationController
  layout false
  skip_before_action :verify_authenticity_token

  # rubocop:disable Metrics/MethodLength
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
      data: attachment.attachment_js
    }, status: 200
  end
  # rubocop:enable Metrics/MethodLength

  def ajax_handle
    case params[:media_action]
    when 'delete-post'
      delete_attachment
    end
    query_attachments
  end

  private

  def query_attachments
    attachments = Photo.all.order(id: :desc).map(&:attachment_js)
    json_response = { success: true, data: attachments }
    response.headers['Transfer-Encoding'] = 'identity'
    response.headers['Content-Length'] = json_response.to_json.size
    render json: json_response, status: 200
  end

  def delete_attachment
    attachment = Photo.find_by(id: params[:id])
    attachment.destroy
  end
end
