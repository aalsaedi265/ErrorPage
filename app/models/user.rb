class User < ApplicationRecord

    has_many :issues
    has_many :catagories, through: :issues

    validates :name, presence:true
end
