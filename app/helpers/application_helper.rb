module ApplicationHelper
  def flash_message_type(key)
    type = case key
           when 'alert'
             'warning'
           else
             key
           end
    type
  end

  def controller_assets
    # return if Dir.glob("#{Rails.root}/app/assets/javascripts/#{params[:controller]}.js").blank? && Rails.env.development?
    return if Dir.glob("#{Rails.root}/public/assets/#{params[:controller]}-*.js").blank?
    javascript_include_tag asset_url "#{params[:controller]}.js", 'data-turbolinks-track': 'reload'
  end
end
