class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.text :name
      t.text :founder
      t.integer :establish
      t.text :origin
      t.text :image
      t.timestamps
    end
  end
end
