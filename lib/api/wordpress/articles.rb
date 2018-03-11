require 'wp_api_client'

module Api
  module Wordpress
    class Articles
      attr_accessor :client

      def initialize
        configure_client
        @client ||= WpApiClient.get_client
      end

      class << self
        def find(id)
          api = self.new
          client = api.client
          client.get("posts/#{id}")
        end
      end

      private

      def configure_client
        WpApiClient.configure do |api_client|
          api_client.endpoint = Settings.wp_api_url
        end
      end
    end
  end
end
