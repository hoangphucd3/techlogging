module Admin
  # Admin::BaseController
  class BaseController < ::ApplicationController
    include Accessible

    skip_before_action :check_user, only: :destroy
    before_action :authenticate_admin_user!
    layout 'admin/application'

    def index; end
  end
end
