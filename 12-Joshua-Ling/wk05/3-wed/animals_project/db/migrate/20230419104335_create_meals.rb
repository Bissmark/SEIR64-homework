class CreateMeals < ActiveRecord::Migration[5.2]
  def change
    create_table :meals do |t|
      t.text :name
      t.integer :calories
      t.text :image
      t.timestamps
    end
  end
end
