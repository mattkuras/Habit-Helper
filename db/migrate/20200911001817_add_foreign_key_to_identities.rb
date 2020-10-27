class AddForeignKeyToIdentities < ActiveRecord::Migration[6.0]
  def change
    add_column :identities, :category_id, :integer, foregin_key: true
  end
end
