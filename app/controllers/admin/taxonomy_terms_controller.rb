module Admin
  class TaxonomyTermsController < BaseController
    def index
      @terms = TaxonomyTerm.all
    end

    def new
      @term = TaxonomyTerm.new
    end

    def create
      @term = TaxonomyTerm.new(term_params)
      if @term.save
        flash[:success] = 'Create term successfully'
      else
        flash[:warning] = 'Create term fail'
      end
      redirect_to action: :index
    end

    def edit
      @term = TaxonomyTerm.find_by(id: params[:id])
    end

    def update
      @term = TaxonomyTerm.find_by(id: params[:id])
      if @term.update(term_params)
        flash[:success] = 'Update term successfully'
      else
        render action: :update
      end
      redirect_to action: :index
    end

    def destroy
      term = TaxonomyTerm.find_by(id: params[:id])
      term.destroy
      redirect_to action: :index
    end

    private

    def term_params
      params.require(:taxonomy_term).permit(:name,
                                            :description,
                                            :taxonomy_vocabulary_id)
    end
  end
end
