class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :donut_shop_id, :user_id
end
