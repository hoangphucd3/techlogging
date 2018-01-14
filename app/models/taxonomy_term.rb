class TaxonomyTerm < ApplicationRecord
  has_many :taxonomy_term_relationships, dependent: :destroy
  belongs_to :taxonomy_vocabulary, optional: true

  scope :topic, -> { where taxonomy_vocabulary_id: 1 }
end
