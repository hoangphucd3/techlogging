module Admin
  class PhotoController < BaseController
    def index
      @photo = Photo.all
    end

    def create
      photo = Photo.create(image: params[:file])
      render json: photo.errors, status: 400 unless photo
      photo_partial = render_to_string('admin/photo/_photo',
                                       layout: false,
                                       formats: [:html],
                                       locals: { photo: photo })
      render json: { photo: photo_partial }, status: 200
    end
  end
end
