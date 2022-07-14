class Issue < ApplicationRecord
    belongs_to :user
    belongs_to :catagory

    validates :comment, presence: true

end