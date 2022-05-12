class RemoveUserIdFromDonuts < ActiveRecord::Migration[6.1]
  def change
    remove_column :donuts, :user_id, :integer
  end
end
