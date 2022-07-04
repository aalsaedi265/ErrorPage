class CreateIssues < ActiveRecord::Migration[6.1]
  def change
    create_table :issues do |t|
      t.string :comment
      t.belongs_to :user
      t.belongs_to :catagory
      t.timestamps
    end
  end
end
