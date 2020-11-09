class EditColumns < ActiveRecord::Migration[6.0]
  def change
    change_column :identities, :successful_days, :integer, default: 0
  end
end
