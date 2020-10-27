class ChangeColumnDataType < ActiveRecord::Migration[6.0]
  def change
    change_column :identities, :standard, :integer
  end
end
