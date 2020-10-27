class CreateIdentities < ActiveRecord::Migration[6.0]
  def change
    create_table :identities do |t|
      t.string :name
      t.string :description
      t.integer :days
      t.integer :successful_days
      t.string :category 
      t.string :standard
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
