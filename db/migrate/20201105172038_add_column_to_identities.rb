class AddColumnToIdentities < ActiveRecord::Migration[6.0]
  def change
    add_column :identities, :checked_boxes, :integer, default: 0
  end
end
