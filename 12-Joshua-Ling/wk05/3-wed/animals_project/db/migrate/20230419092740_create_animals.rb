class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|
      t.text :name
      t.float :height
      t.text :image
      t.timestamps
    end
  end
end
