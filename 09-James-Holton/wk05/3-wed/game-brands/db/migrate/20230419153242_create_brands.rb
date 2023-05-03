class CreateBrands < ActiveRecord::Migration[5.2]
  def change
    create_table :brands do |t|
      t.text :name
      t.date :founded
      t.text :based
      t.integer :net
      t.text :image
    end
  end
end
