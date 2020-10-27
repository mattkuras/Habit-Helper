class RemoveCategoryFromIdentities < ActiveRecord::Migration[6.0]
  def change
    remove_column :identities, :category, :string
  end
end
