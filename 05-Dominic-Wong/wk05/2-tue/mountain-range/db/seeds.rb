# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mountain.destroy_all

Mountain.create :name => 'Everest', :elevation => 8848, :range => 'Himalayas', :continent => 'Asia'
Mountain.create :name => 'K2', :elevation => 8611, :range => 'Karakoram', :continent => 'Asia'
Mountain.create :name => 'Tirich Mir', :elevation => 7708, :range => 'Hindu Kush', :continent => 'Asia'

puts " #{ Mountain.count } mountains created."