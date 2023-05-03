class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.text :name
      t.text :model
      t.text :year
      t.text :acceleration
      t.text :driveline
      t.text :image
      t.timestamps
    end
  end
end
