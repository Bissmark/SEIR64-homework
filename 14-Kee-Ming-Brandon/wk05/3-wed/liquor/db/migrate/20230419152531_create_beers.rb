class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.text :name
      t.text :beer_type
      t.text :origin
      t.integer :size
      t.float :std_drinks
      t.float :alcohol_vol
      t.text :name
      t.text :image
      t.timestamps
    end
  end
end
