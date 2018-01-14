class TaxonomyVocabulary < ApplicationRecord
  has_many :taxonomy_terms, dependent: :destroy
end
