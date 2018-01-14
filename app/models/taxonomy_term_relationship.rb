class TaxonomyTermRelationship < ApplicationRecord
  belongs_to :taxonomy_term
  belongs_to :categorizable, polymorphic: true
end
