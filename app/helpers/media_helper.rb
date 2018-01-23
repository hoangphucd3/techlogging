module MediaHelper
  # For _wpPluploadSettings
  def plupload_settings
    unescaped_json do
      {
        'defaults': {
          'file_data_name': 'async-upload',
          'url': media_async_upload_path,
          'filters': {
            'max_file_size': '8388608b',
            'mime_types': [
              {
                'extensions': 'jpg,jpeg,jpe,gif,png'
              }
            ]
          },
          'multipart_params': {
            'action': 'upload-attachment',
            '_wpnonce': 'wp_generated_code', # WP auto generated code
            'authenticity_token': form_authenticity_token
          }
        },
        'browser': {
          'mobile': false,
          'supported': true
        },
        'limitExceeded': false
      }
    end
  end

  # For _wpUtilSettings
  def util_settings
    unescaped_json do
      {
        'ajax': {
          'url': media_ajax_handle_path,
          'authenticity_token': form_authenticity_token
        }
      }
    end
  end

  # For userSettings
  def user_settings
    unescaped_json do
      {
        'url': root_path,
        'uid': current_admin_user.try(:id) || 1,
        'time': (Time.now.to_f * 1000).to_i,
        'secure': '' # WP auto generated code
      }
    end
  end

  # rubocop:disable Metrics/MethodLength
  # For _wpMediaViewsL10n.settings
  def media_views_settings
    # rubocop:disable Metrics/BlockLength
    unescaped_json do
      {
        'tabs': [],
        'tabUrl': '',
        'mimeTypes': {
            'image': 'Images'
        },
        'captions': true,
        'nonce': {
          'sendToEditor': 'wp_generated_code' # WP auto generated code
        },
        'post': {
          'id': 0, # WP auto generated code
          'nonce': '', # WP auto generated code
          'featuredImageId': -1
        },
        'defaultProps': {
          'link': 'none',
          'align': '',
          'size': ''
        },
        'attachmentCounts': {
          'audio': 1,
          'video': 1
        },
        'oEmbedProxyUrl': '',
        'embedExts': %w[mp3 ogg m4a wav mp4 m4v webm ogv flv],
        'embedMimes': {
          'mp3': 'audio\/mpeg',
          'ogg': 'audio\/ogg',
          'm4a': 'audio\/mpeg',
          'wav': 'audio\/wav',
          'mp4': 'video\/mp4',
          'm4v': 'video\/mp4',
          'webm': 'video\/webm',
          'ogv': 'video\/ogg',
          'flv': 'video\/x-flv'
        },
        'contentWidth': 525,
        'months': [],
        'mediaTrash': 0
      }
    end
    # rubocop:enable Metrics/BlockLength
  end
  # rubocop:enable Metrics/MethodLength

  # For _wpMediaModelsL10n
  def media_models
    unescaped_json do
      {
        'settings': {
          'post': {
            'id': 0 # WP auto generated code
          }
        }
      }
    end
  end
end
