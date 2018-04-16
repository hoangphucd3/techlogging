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
    object.content || api_filter_content
  end

  def api_thumbnail_url
    api_thumbnail = Api::Wordpress::Articles.find(object.specific.api_id)._embedded['wp:featuredmedia']
    return nil if api_thumbnail.blank?
    api_thumbnail[0]['media_details']['sizes']['medium']['source_url'].to_media_server_link
  end

  # rubocop:disable Metrics/LineLength
  def api_filter_content
    Api::Wordpress::Filter.new(Api::Wordpress::Articles.find(object.specific.api_id).content)
                          .content
  end
  # rubocop:enable Metrics/LineLength

  class << self
    def collection_decorator_class
      PaginatingDecorator
    end
  end
end
