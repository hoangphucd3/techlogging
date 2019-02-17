class Article < ApplicationRecord
  # actable

  extend FriendlyId
  friendly_id :title, use: %i[slugged history]

  acts_as_url :title, url_attribute: :slug

  include Categorizable
  include ImageUploader::Attachment.new(:feature_photo)

  belongs_to :user, optional: true

  validates :title, presence: true

  enum status: { draft: 0, publish: 1 }

  scope :published, -> { where(status: 'publish') }

  def to_param
    slug
  end

  def build_term(term_id)
    taxonomy_term_relationships.find_or_create_by(taxonomy_term_id: term_id)
  end

  def remove_orphan_terms(exclude_term_ids)
    taxonomy_term_relationships
      .where.not(taxonomy_term_id: exclude_term_ids)
      .destroy_all
  end

  private

  def should_generate_new_friendly_id?
    title_changed? || super
  end
end
