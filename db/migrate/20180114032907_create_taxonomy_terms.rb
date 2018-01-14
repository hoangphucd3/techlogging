class CreateTaxonomyTerms < ActiveRecord::Migration[5.1]
  def change
    create_table :taxonomy_terms do |t|
      t.string :name
      t.text :description
      t.string :slug, null: false
      t.belongs_to :taxonomy_vocabulary

      t.timestamps
    end

    add_index :taxonomy_terms, :id
    add_index :taxonomy_terms, :slug, unique: true
  end
end
