class Donut < ApplicationRecord
    belongs_to :user 
    belongs_to :donut_shop
end
