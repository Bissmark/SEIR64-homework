class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.text :name
      t.text :nationality
      t.date :dob
      t.text :present_club
      t.text :image
      t.timestamp
      
    end
  end
end
