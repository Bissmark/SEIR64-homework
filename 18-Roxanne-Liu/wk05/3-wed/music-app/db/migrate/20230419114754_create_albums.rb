class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.text :name
      t.text :released
      t.text :genre
      t.text :image
      t.integer :artist_id 
      t.timestamps null: false
    end
  end
end
