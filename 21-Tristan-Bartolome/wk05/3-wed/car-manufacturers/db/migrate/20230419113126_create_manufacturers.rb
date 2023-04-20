class CreateManufacturers < ActiveRecord::Migration[5.2]
  def change
    create_table :manufacturers do |t|
      t.text :name
      t.text :founder
      t.text :founded
      t.text :origin
      t.text :image
      t.timestamps
    end
  end
end
