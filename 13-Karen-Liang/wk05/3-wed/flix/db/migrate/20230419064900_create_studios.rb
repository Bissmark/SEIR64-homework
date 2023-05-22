class CreateStudios < ActiveRecord::Migration[5.2]
  def change
    create_table :studios do |t|
      t.text :name
      t.integer :founded
      t.text :image
      t.timestamps
    end
  end
end
