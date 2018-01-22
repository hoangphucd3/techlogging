require 'find'

# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
# Auto precompile Javascripts
js_path = File.join(Rails.root, 'app/assets/javascripts/')
Find.find(js_path).each do |file|
  Rails.application.config.assets.precompile << $1.sub(js_path, '') if file =~ (/^(.*\.js)(\.coffee)?(\.erb)?(\.map)?$/)
end
# Auto precompile CSS
css_path = File.join(Rails.root, 'app/assets/stylesheets/')
Find.find(css_path).each do |file|
  Rails.application.config.assets.precompile << $1.sub(css_path, '') if file =~ (/^(.*)\.(scss|css)(\.erb)?$/)
end
