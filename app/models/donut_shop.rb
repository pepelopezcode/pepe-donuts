class DonutShop < ApplicationRecord
    has_many :donuts 
    has_many :reviews
end
