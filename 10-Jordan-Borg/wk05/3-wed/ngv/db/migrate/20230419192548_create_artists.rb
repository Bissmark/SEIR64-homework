class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.text :name
      t.text :nationality
      t.date :dob
      t.text :style
      t.text :image
      t.timestamps # created_at, update_at
    end
  end
end
