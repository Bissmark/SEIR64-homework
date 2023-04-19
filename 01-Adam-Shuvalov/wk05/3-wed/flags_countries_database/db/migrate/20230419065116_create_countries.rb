class CreateCountries < ActiveRecord::Migration[5.2]
  def change
    create_table :countries do |t|
      t.text :name
      t.integer :population
      t.text :capital
      t.integer :states
      t.text :image
      t.timestamps
    end
  end
end
