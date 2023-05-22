class CreateNfl < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.text :name 
      t.text :owner
      t.text :championships
      t.text :image
    end
  end
end
