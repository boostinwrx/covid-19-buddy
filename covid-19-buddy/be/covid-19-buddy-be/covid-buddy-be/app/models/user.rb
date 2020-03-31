class User < ApplicationRecord
  has_secure_password
  has_many :users_entries
  has_many :entries, through: :users_entries
end
