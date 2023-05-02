# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mountain.destroy_all
#reseed

Mountain.create :name => 'Mt Everest', :country => 'Himalayas', :height => 8848
Mountain.create :name => 'Mont Blanc', :country => 'France', :height => 4810
Mountain.create :name => 'Mt Fuji', :country => 'Japan', :height => 3775

puts "#{ Mountain.count } mountains created."