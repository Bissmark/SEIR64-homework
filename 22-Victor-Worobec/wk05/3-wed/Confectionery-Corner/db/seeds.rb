# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Manufacturer.destroy_all

Manufacturer.create(:name => 'Cadbury', :founded => '1824', :founder => 'John Cadbury', :country => 'England', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cadbury_%282020%29.svg/1200px-Cadbury_%282020%29.svg.png')
Manufacturer.create(:name => "Allen's", :founded => '1891', :founder => 'Alfred Weaver Allen', :country => 'Australia', :image => 'https://upload.wikimedia.org/wikipedia/en/2/2b/Allens_brand_logo.png')
Manufacturer.create(:name => 'Mars', :founded => '1911', :founder => 'Franklin Clarence Mars', :country => 'America', :image => 'https://aus.mars.com/sites/g/files/jydpyr531/files/Mars%20Wordmark%20RGB%20Blue.png')

puts "#{ Manufacturer.count } manufacturers created."

Confectionery.destroy_all

Confectionery.create(:name => 'Freddo', :group => 'Chocolate', :energy => '100', :protein => '100', :fat => '100', :carbs => '100', :image => 'https://cdn0.woolworths.media/content/wowproductimages/large/326628.jpg')
Confectionery.create(:name => 'Snakes Alive', :group => 'Jelly', :energy => '100', :protein => '100', :fat => '100', :carbs => '100', :image => 'https://www.nestle.com.au/sites/g/files/pydnoa356/files/2021-05/Allens%20Snakes%20Alive%20200g%20Bag.jpg')
Confectionery.create(:name => 'Twix', :group => 'Chocolate', :energy => '100', :protein => '100', :fat => '100', :carbs => '100', :image => 'https://www.needly.com.au/images/thumbs/0003483_672.jpeg')

puts "#{ Confectionery.count } 'confectioneries created."