# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Firearm.destroy_all

Firearm.create :model => 'M4A1', :manufacturer => 'Colt', :calibre => '5.56x45', :family => 'Assault Rifle', :fire_rate => 800, :effective_distance => 500, :image => 'https://modernfirearms.net/wp-content/uploads/2010/10/m4a1-fn.jpg'
Firearm.create :model => 'MP5', :manufacturer => 'HK', :calibre => '9x19', :family => 'Submachine Gun', :fire_rate => 800, :effective_distance => 200, :image => 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Schweiz_Suisse_Swiss_Army_-_MP5_A5.jpg'
Firearm.create :model => 'M9A3', :manufacturer => 'Beretta', :calibre => '9x19', :family => 'Pistol', :fire_rate => 30, :effective_distance => 50, :image => 'https://www.berettaaustralia.com.au/wp-content/uploads/2023/02/M9A4_Beretta_M9A4_9mm_USA_2.png'

puts "#{ Firearm.count } firearms created."