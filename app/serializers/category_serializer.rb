class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image

  has_many :identities
end
