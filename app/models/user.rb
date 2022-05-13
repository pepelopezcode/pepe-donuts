class User < ApplicationRecord
    has_secure_password
    has_many :donut_carts
    has_many :reviews 
    validates :email, uniqueness: true
    validates :username, uniqueness: true
end
