class ChangeStandardToInteger < ActiveRecord::Migration[6.0]
  def change
    change_column :identities, :standard, 'integer USING CAST(standard AS integer)'
  end
end
