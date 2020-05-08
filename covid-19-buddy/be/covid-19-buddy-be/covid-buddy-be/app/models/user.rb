class User < ApplicationRecord
  has_secure_password
  has_many :entries

  validates :username, presence: true
  validates :password, presence: true
  validates :lastname, presence: true
  validates :firstname, presence: true
  validates :age, presence: true
  validates :pronouns, presence: true
end
