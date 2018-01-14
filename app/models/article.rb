class Article < ApplicationRecord
  include Categorizable
  include ImageUploader::Attachment.new(:feature_photo)

  validates :title, presence: true

  def build_terms(term_ids)
    term_ids.reject!(&:blank?)
    remove_orphan_terms(term_ids)
    term_ids.reject(&:blank?).each do |term_id|
      self.taxonomy_term_relationships.find_or_create_by(taxonomy_term_id: term_id)
    end
  end

  private

  def remove_orphan_terms(exclude_term_ids)
    self.taxonomy_term_relationships.where.not(taxonomy_term_id: exclude_term_ids).destroy_all
  end
end
