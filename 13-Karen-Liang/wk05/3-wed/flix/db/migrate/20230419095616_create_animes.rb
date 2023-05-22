class CreateAnimes < ActiveRecord::Migration[5.2]
  def change
    create_table :animes do |t|
      t.text :name
      t.text :synonyms
      t.text :aired
      t.text :status
      t.text :description
      t.text :image
      t.timestamps
    end
  end
end
