class CreateTaxonomyTerms < ActiveRecord::Migration[5.1]
  def change
    create_table :taxonomy_terms do |t|
      t.string :name
      t.text :description
      t.references :taxonomy_terms

      t.timestamps
    end
  end
end
