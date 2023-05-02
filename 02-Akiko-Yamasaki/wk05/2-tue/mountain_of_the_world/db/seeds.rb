# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mountain.destroy_all

Mountain.create :name => 'Aoraki', :height => 3724, :country => 'New Zealand'
Mountain.create :name => 'Mont Blanc', :height => 4810, :country => 'France'
Mountain.create :name => 'Mount Fuji', :height => 3776, :country => 'Japan'

puts "#{ Mountain.count } mountains created."