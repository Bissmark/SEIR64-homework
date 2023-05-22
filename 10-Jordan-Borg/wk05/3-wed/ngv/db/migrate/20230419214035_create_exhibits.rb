class CreateExhibits < ActiveRecord::Migration[5.2]
  def change
    create_table :exhibits do |t|
      t.text :title
      t.year :year
      t.text :medium
      t.text :style
      t.text :image
      t.timestamps
    end
  end
end
