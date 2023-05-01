class CreateManufacturer < ActiveRecord::Migration[5.2]
  def change
    create_table :manufacturers do |t|
      t.text :name
      t.text :founded
      t.text :founder
      t.text :country
      t.text :image
      t.timestamps
    end
  end
end