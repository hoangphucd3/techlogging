class AddSlugToAdminUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :admin_users, :slug, :string, null: false
    add_index :admin_users, :slug, unique: true
  end
end
