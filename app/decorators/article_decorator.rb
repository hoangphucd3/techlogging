# frozen_string_literal: true

class ArticleDecorator < Draper::Decorator
  delegate_all

  def title
    object.title
  end

  def description
    object.description \
    || Api::Wordpress::Articles.find(object.specific.api_id).excerpt
  end

  def content
    object.content \
    || filter_image_from(Api::Wordpress::Articles.find(object.specific.api_id).content)
  end

  def api_thumbnail_url
    api_thumbnail = Api::Wordpress::Articles.find(object.specific.api_id)._embedded['wp:featuredmedia']
    return nil if api_thumbnail.blank?
    api_thumbnail[0]['media_details']['sizes']['medium']['source_url']
  end

  private

  def filter_image_from(content)
    image_pattern = %r{(<img .*\/?>)}
    content.gsub(image_pattern, '<figure class="image pull-none image-large"><span class="image">\1</span></figure>')
           .gsub(Settings.wp_upload_url, Settings.assets_url)
  end
end
