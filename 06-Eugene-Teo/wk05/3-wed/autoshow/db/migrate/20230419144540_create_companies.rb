class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.text :name
      t.text :image
      t.text :headquarters
      t.text :founded

      t.timestamps
    end
  end
end
