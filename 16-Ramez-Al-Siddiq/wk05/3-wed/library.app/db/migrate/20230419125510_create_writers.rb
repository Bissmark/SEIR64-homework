class CreateWriters < ActiveRecord::Migration[5.2]
  def change
    create_table :writers do |t|
      t.text :name
      t.date :dob
      t.text :nationality
      t.text :image
      t.timestamps
    end
  end
end
