# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Country.destroy_all

Country.create(:name => 'Australia', :population => 26439900, :capital => 'Canberra', :states => 8, :image => 'https://www.touropia.com/gfx/b/2019/07/australia.png')
Country.create(:name => 'Unites State of America', :population => 331900000, :capital => 'Washington D.C', :states => 52, :image => 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Map_of_USA_with_state_and_territory_names_2.png')
Country.create(:name => 'Japan', :population => 125000000, :capital => 'Tokyo', :states => 47, :image => 'https://s3-ap-northeast-1.amazonaws.com/bhive-jp/media/yabai/article/2098/2098_1_map_prefectures.jpg')
Country.create(:name => 'United Kingdom', :population => 56000000, :capital => 'London', :states => 48, :image => 'https://www.theedkins.co.uk/jo/maps/uktowns.gif')

puts "#{ Country.count } countries created."

Flag.destroy_all

Flag.create(:image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_New_South_Wales.svg/1200px-Flag_of_New_South_Wales.svg.png', :adoption_date => '1876', :state => 'New South Wales', :design => 'A British Blue Ensign defaced with the state badge in the fly.')
Flag.create(:image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/1024px-Flag_of_Maryland.svg.png', :adoption_date => '1904', :state => 'Maryland', :design => 'Heraldic banner of Cecil Calvert, 2nd Baron Baltimore.')
Flag.create(:image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flag_of_Tokyo_Metropolis.svg/1024px-Flag_of_Tokyo_Metropolis.svg.png', :adoption_date => '1964', :state => 'Tokyo', :design => 'A white Metropolitan Crest on an Edo purple background.')
Flag.create(:image => 'https://upload.wikimedia.org/wikipedia/commons/0/01/County_Flag_of_Suffolk.svg', :adoption_date => '2017', :state => 'Suffolk', :design => "The design is the Saint Edmund's mediaeval banner of arms. It is two gold arrows passing through a gold crown or with heraldic description as Azure two Arrows in saltire, points downwards, enfiled with an ancient Crown Or.")

puts "#{ Flag.count } flags created."