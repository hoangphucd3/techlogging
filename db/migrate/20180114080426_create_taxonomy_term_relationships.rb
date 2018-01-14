class CreateTaxonomyTermRelationships < ActiveRecord::Migration[5.1]
  def change
    create_table :taxonomy_term_relationships do |t|
      t.integer :categorizable_id
      t.string  :categorizable_type
      t.belongs_to :taxonomy_term

      t.timestamps
    end

    add_index :taxonomy_term_relationships,
              [:categorizable_type, :categorizable_id],
              name: 'index_taxonomy_terms_categorizable'
    add_index :taxonomy_term_relationships,
              :taxonomy_term_id,
              name: 'index_taxonomy_terms'
  end
end
