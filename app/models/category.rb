class Category < ApplicationRecord
    has_many :identities
    has_many :users, through: :identities
end
