class AddSlugToAdminUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :admin_users, :slug, :string
    add_index :admin_users, :slug, unique: true
  end
end
