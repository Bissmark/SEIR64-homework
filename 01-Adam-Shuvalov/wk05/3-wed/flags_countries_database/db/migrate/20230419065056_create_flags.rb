class CreateFlags < ActiveRecord::Migration[5.2]
  def change
    create_table :flags do |t|
      t.text :image
      t.text :adoption_date
      t.text :state
      t.text :design
      t.timestamps
    end
  end
end
