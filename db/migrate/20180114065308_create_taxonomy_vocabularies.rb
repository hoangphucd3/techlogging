class CreateTaxonomyVocabularies < ActiveRecord::Migration[5.1]
  def change
    create_table :taxonomy_vocabularies do |t|
      t.string :name
      t.text :description

      t.timestamps
    end

    add_index :taxonomy_vocabularies, :id
  end
end
