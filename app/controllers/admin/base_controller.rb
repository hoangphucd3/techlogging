module Admin
  # Admin::BaseController
  class BaseController < ::ApplicationController
    before_action :authenticate_admin_user!
    layout 'admin/application'

    def index; end
  end
end
