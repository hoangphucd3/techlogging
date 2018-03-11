class CreateWpPosts < ActiveRecord::Migration[5.1]
  def change
    create_table :wp_posts do |t|
      t.string :api_id
    end
  end
end
