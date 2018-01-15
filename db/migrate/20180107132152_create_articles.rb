class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :description
      t.text :content
      t.integer :status, default: 0, null: false
      t.string :slug, null: false
      t.text :feature_photo_data
      t.belongs_to :article_type
      t.belongs_to :user

      t.timestamps
    end

    add_index :articles, :id
    add_index :articles, :slug, unique: true
  end
end
