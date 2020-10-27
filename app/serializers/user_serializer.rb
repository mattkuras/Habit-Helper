class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email
  has_many :identities
  has_many :categories, through: :identities

end
