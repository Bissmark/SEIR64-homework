class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :works do |t|
      t.text :title
      t.text :date
      t.text :not
      t.text :genre
      t.text :image
      t.timestamps
  end
end
end
