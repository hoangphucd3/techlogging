class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :description
      t.text :content
      t.text :feature_photo_data

      t.timestamps
    end
  end
end
