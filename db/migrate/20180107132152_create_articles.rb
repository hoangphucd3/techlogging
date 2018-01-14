class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :description
      t.text :content
      t.string :slug, null: false
      t.text :feature_photo_data

      t.timestamps
    end

    add_index :articles, :id
    add_index :articles, :slug, unique: true
  end
end
