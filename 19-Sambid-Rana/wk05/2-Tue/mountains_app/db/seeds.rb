# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mountain.destroy_all

Mountain.create :name => 'Mount Everest', :location => 'Nepal', :elevation => 8848.86, :first_ascent => 'Tenzing Norgay and Edmund Hillary'
Mountain.create :name => 'Mount Kailash', :location => 'China', :elevation => 6638, :first_ascent => 'Unclimbed' 

puts "#{ Mountain.count } Mountains created"