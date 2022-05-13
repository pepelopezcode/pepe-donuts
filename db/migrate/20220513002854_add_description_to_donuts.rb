class AddDescriptionToDonuts < ActiveRecord::Migration[6.1]
  def change
    add_column :donuts, :description, :string
  end
end
