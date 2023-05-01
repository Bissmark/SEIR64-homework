class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.text :name
      t.text :position
      t.text :image
    end
  end
end
