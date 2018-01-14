module Categorizable
  extend ActiveSupport::Concern

  included do
    has_many :taxonomy_term_relationships, as: :categorizable, dependent: :destroy
    has_many :taxonomy_terms, through: :taxonomy_term_relationships
  end
end
