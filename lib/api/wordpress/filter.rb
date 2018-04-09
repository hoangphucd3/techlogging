require 'nokogiri'

module Api
  module Wordpress
    class Filter
      def initialize(article_content)
        @article_content = article_content
      end

      def content
        hide_real_image_url
        replace_footnotes
        insert_footnotes
        @article_content
      end

      private

      # rubocop:disable Metrics/LineLength
      def replace_footnotes
        footnote_pattern = Regexp.new("#{Settings.wp_site_url}.+?(#easy-footnote-bottom-\\d+)")
        @article_content.gsub!(footnote_pattern, '\1') if @article_content.match?(footnote_pattern)
      end
      # rubocop:enable Metrics/LineLength

      def insert_footnotes
        @footnotes = Nokogiri::HTML.parse(@article_content)
                                   .search('span.easy-footnote a')
                                   .map(&:values)
                                   .to_h
        template_path = Rails.root.join('lib/api/wordpress/templates/easy-footnotes.html.erb')
        footnotes_layout = ERB.new(IO.read(template_path)).result(binding)
        @article_content << footnotes_layout
      end

      # rubocop:disable Metrics/LineLength
      # @TODO: Replace image only
      def hide_real_image_url
        image_pattern = %r{(<img .*\/?>)}
        return unless @article_content.match?(image_pattern)
        @article_content.gsub!(image_pattern, '<figure class="image pull-none image-large"><span class="image">\1</span></figure>')
                        .to_media_server_link
      end
      # rubocop:enable Metrics/LineLength
    end
  end
end
