# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mountain.destroy_all

Mountain.create :name => 'Mount Everest', :location => 'Asia', :height => 8849
Mountain.create :name => 'Mount Fuji', :location => 'Asia', :height => 3776
Mountain.create :name => 'Mont Blanc', :location => 'Europe', :height => 4809

puts "#{ Mountain.count } mountains created."