class Catagory < ApplicationRecord

  has_many :issues
  has_many :users, through: :issues

  validates :title, uniqueness: true
end
