class RenameUserNameToUsername2 < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :name, :username
  end
end
