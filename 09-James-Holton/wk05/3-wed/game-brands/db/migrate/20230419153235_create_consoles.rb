class CreateConsoles < ActiveRecord::Migration[5.2]
  def change
    create_table :consoles do |t|
      t.text :name
      t.text :brand
      t.date :rd
      t.integer :units
      t.text :play
      t.text :image
    end
  end
end
