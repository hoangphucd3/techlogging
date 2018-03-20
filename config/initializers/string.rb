class String
  # Replace original image url to media assets server
  def to_media_server_link
    self.gsub(Settings.wp_upload_url, Settings.assets_url)
  end
end
