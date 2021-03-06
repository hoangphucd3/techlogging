# frozen_string_literal: true

# @TODO: Consider to move to api content handler
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
    api_thumbnail[0]['media_details']['sizes']['medium']['source_url'].to_media_server_link
  end

  private

  # @TODO: Replace image only
  def filter_image_from(content)
    image_pattern = %r{(<img .*\/?>)}
    content.gsub(image_pattern, '<figure class="image pull-none image-large"><span class="image">\1</span></figure>')
           .to_media_server_link
  end

  class << self
    def collection_decorator_class
      PaginatingDecorator
    end
  end
end
