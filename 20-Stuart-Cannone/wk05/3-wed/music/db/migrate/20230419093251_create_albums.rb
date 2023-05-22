class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.text :name
      t.text :genre
      t.date :releasedate
      t.text :length
      t.text :image
      t.timestamps
    end
  end
end
