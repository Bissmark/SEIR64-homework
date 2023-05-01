class CreateMovies < ActiveRecord::Migration[5.2]
	def change
		create_table :movies do |t|
			t.text :name
			t.integer :box_office
			t.text :release
			t.text :genre
			t.text :image
			t.timestamps
		end
	end
end
