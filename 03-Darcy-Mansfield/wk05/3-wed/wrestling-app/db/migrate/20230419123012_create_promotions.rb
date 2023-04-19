class CreatePromotions < ActiveRecord::Migration[5.2]
  def change
    create_table :promotions do |t|
      t.text :promotion
      t.text :logo
      t.text :country
      t.integer :year
      t.text :instagram
      t.timestamps
    end
  end
end
 