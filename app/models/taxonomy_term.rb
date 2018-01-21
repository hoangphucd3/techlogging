class TaxonomyTerm < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: %i[slugged history]

  acts_as_url :name, url_attribute: :slug

  has_many :taxonomy_term_relationships, dependent: :destroy
  belongs_to :taxonomy_vocabulary, optional: true

  scope :topic, -> { where taxonomy_vocabulary_id: 1 }

  def to_param
    slug
  end

  private

  def should_generate_new_friendly_id?
    name_changed? || super
  end
end
