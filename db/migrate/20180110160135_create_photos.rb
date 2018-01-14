class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :title
      t.text :image_data

      t.timestamps
    end

    add_index :photos, :id
  end
end
