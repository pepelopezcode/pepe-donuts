class CreateDonutCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :donut_carts do |t|
      t.string :donut_name
      t.string :image_url
      t.integer :price
      t.integer :user_id

      t.timestamps
    end
  end
end
