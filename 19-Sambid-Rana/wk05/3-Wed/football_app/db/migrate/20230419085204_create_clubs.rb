class CreateClubs < ActiveRecord::Migration[5.2]
  def change
    create_table :clubs do |t|
      t.text :name
      t.text :location
      t.integer :titles_won
      t.integer :stadium_cap
      t.text :image
      t.timestamp 
      
    end
  end
end
