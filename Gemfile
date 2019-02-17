source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2', '>= 5.2.2'
# Use mysql as the database for Active Record
gem 'mysql2', '>= 0.3.18', '< 0.5'
# Use Puma as the app server
gem 'puma', '~> 3.7'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Flexible authentication solution for Rails with Warden
gem 'devise'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'bootstrap', '>= 4.1.2'
gem 'jquery-rails'

# Set of higher-level helper methods for image processing
gem 'image_processing', '~> 1.0'
# FastImage finds the size or type of an image given its uri by fetching as little as needed
gem 'fastimage'
# This gem provides a Ruby binding for the libvips image processing library
gem 'ruby-vips'
# Toolkit for file attachments in Ruby applications
gem 'shrine', '~> 2.0'

# Create pretty URLs and work with human-friendly strings
gem 'friendly_id', '~> 5.1.0'
# Useful extensions to Ruby's String class
gem 'stringex'

# Integrates TinyMCE into the Rails asset pipeline
gem 'tinymce-rails'

# manage environment specific settings
gem 'config'

# Simulates multiple-table-inheritance (MTI) for ActiveRecord models.
gem 'active_record-acts_as'

# Read-only access for WP-API v2
gem 'wp-api-client'

# Object-oriented layer of presentation logic
gem 'draper'

# Paginator for Rails
gem 'kaminari'

source 'https://rails-assets.org' do
  gem 'rails-assets-backbone'
  gem 'rails-assets-dropzone'
  gem 'rails-assets-underscore'
end
group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'capistrano', '~> 3.10'
  gem 'capistrano-passenger'
  gem 'capistrano-rails', '~> 1.3'
  gem 'capistrano-rbenv', '~> 2.1'
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
  gem 'rack-cors', require: 'rack/cors'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'pry'
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
