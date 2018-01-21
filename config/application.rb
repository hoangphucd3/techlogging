require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Techlogging
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.assets.paths << Rails.root.join('fonts')
    config.autoload_paths << Rails.root.join('form_objects')
    config.eager_load_paths << Rails.root.join('form_objects')
    # config.middleware.insert_before 0, Rack::Cors do
    #   allow do
    #     origins '*'
    #     resource '*', :headers => :any, :methods => [:get, :post, :options]
    #   end
    # end
    config.action_dispatch.default_headers.merge!({
                                                      'Access-Control-Allow-Origin' => '*',
                                                      'Access-Control-Request-Method' => '*',
                                                      # 'Access-Control-Allow-Credentials'=>'true',
                                                      # 'Access-Control-Allow-Headers'=>'accept, content-type',
                                                      # 'Content-Type'=>'application/json; charset=UTF-8',
                                                      # 'Transfer-Encoding'=>'identity',
                                                  })
  end
end
