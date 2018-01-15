class CreateArticleTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :article_types do |t|
      t.string :name, null: false, index: true
      t.text :description

      t.timestamps
    end
  end
end
