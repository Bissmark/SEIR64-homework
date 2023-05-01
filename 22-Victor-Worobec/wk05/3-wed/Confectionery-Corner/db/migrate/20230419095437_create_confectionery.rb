class CreateConfectionery < ActiveRecord::Migration[5.2]
  def change
    create_table :confectioneries do |t|
      t.text :name
      t.text :group
      t.integer :energy
      t.integer :protein
      t.integer :fat
      t.integer :carbs
      t.text :image
      t.timestamps
    end
  end
end