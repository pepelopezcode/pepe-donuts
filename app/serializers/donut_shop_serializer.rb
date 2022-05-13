class DonutShopSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :donuts
  has_many :reviews
end
