Brand.destroy_all

Brand.create(:name => 'Nintendo', :founded => '1889-09-23', :based => 'Japan', :net => 3924000000, :image => 'https://i.imgur.com/gabCZnE.png')
Brand.create(:name => 'Microsoft Xbox', :founded => '2001-11-15', :based => 'United States', :net => 4760000000, :image => 'https://i.imgur.com/bvGxnWV.jpg')
Brand.create(:name => 'Sony Playstation', :founded => '1994-12-10', :based => 'Japan', :net => 6839000000, :image => 'https://i.imgur.com/sCsN5F5.jpg')

Console.destroy_all

Console.create(:name => 'Nintendo Switch OLED', :brand => 'Nintendo', :rd => '2021-10-8', :units => 9330000, :play => 'hybrid', :image => 'https://i.imgur.com/kU0jCp9.png')
Console.create(:name => 'Nintendo Switch (original model)', :brand => 'Nintendo', :rd => '2017-03-17', :units => 122550000, :play => 'Hybrid', :image  =>'https://i.imgur.com/ZnmIv8F.jpg')
Console.create(:name => 'Playstation 5', :brand => 'Sony', :rd => '2020-11-12', :units => 30000000, :play => 'Home', :image => 'https://i.imgur.com/1gapc1J.jpg')
Console.create(:name => 'Playstation 2', :brand => 'Sony', :rd => '2000-03-04', :units => 155000000, :play => 'Home', :image => 'https://i.imgur.com/LBEkITP.jpg')
Console.create(:name => 'Xbox 360', :brand => 'Microsoft', :rd => '2005-11-22', :units => 84000000, :play => 'home', :image => 'https://i.imgur.com/tMjWtnF.jpg')
Console.create(:name => 'Xbox One', :brand => 'Microsoft', :rd => '2013-11-22', :units => 58500000, :play => 'Home', :image => 'https://i.imgur.com/Esi2pnn.jpg')

puts "#{ Brand.count } Brands created"
puts "#{ Console.count } Consoles created"