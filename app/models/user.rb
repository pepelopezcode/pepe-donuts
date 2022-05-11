class User < ApplicationRecord
    has_secure_password
    has_many :donuts
    has_many :reviews 
end
