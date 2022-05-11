class CreateDonuts < ActiveRecord::Migration[6.1]
  def change
    create_table :donuts do |t|
      t.string :name
      t.string :image_url
      t.integer :donut_shop_id
      t.integer :user_id

      t.timestamps
    end
  end
end
