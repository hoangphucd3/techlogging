class TaxonomyVocabulary < ApplicationRecord
  has_many :taxonomy_terms, inverse_of: :taxonomy_vocabulary, dependent: :destroy

  scope :topic, -> {  where id: 1 }
  scope :tag, -> {  where id: 2 }
end
