class Entry < ApplicationRecord
  has_many :users_entries
  has_many :users, through: :users_entries
end
