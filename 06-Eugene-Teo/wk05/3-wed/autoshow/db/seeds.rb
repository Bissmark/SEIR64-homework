# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Company.destroy_all

Company.create(:name => 'Toyota', :image => 'https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png', :headquarters => 'Toyota City, Aichi Prefecture, Japan' '豊田市, 愛知県', :founded => '1936')
Company.create(:name => 'Honda', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png', :headquarters => 'Minato City, Tokyo, Japan' '港区, 東京', :founded => '1946')
Company.create(:name => 'Nissan', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nissan_logo.png/700px-Nissan_logo.png', :headquarters => 'Nishi-ku, Yokohama, Japan', :founded => '1933')
Company.create(:name => 'Toyota', :image => 'https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png', :headquarters => 'Toyota City, Aichi Prefecture, Japan' '豊田市, 愛知県', :founded => '1936')
Company.create(:name => 'Toyota', :image => 'https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png', :headquarters => 'Toyota City, Aichi Prefecture, Japan' '豊田市, 愛知県', :founded => '1936')
Company.create(:name => 'Toyota', :image => 'https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png', :headquarters => 'Toyota City, Aichi Prefecture, Japan' '豊田市, 愛知県', :founded => '1936')

puts "#{ Company.count } companies created."

# You can use ChatGPT for seed data, including images. 

Carmodel.destroy_all

Carmodel.create(:name => 'Corolla', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2016_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282017-07-15%29_01.jpg/223px-2016_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282017-07-15%29_01.jpg')
Carmodel.create(:name => 'Camry', :image => 'https://www.toyota.com.sg/showroom/new-models/-/media/5149a2d0b2474799b3ce2477b5dcac66.png')
Carmodel.create(:name => 'C-HR', :image => 'https://global.toyota/pages/news/images/2016/09/28/1330_C-HR/20160928_01_ogp.jpg')
Carmodel.create(:name => 'Corolla', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2016_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282017-07-15%29_01.jpg/223px-2016_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282017-07-15%29_01.jpg')
Carmodel.create(:name => 'Corolla', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2016_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282017-07-15%29_01.jpg/223px-2016_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282017-07-15%29_01.jpg')
Carmodel.create(:name => 'Corolla', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2016_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282017-07-15%29_01.jpg/223px-2016_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282017-07-15%29_01.jpg')

puts "#{ Carmodel.count } models created."