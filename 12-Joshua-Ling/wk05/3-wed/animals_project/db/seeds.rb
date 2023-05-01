Animal.destroy_all

Animal.create(:name => 'Lion', :height => 120, :image => 'https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg')
Animal.create(:name => 'Dolphin', :height => 50, :image => 'https://www.australiangeographic.com.au/wp-content/uploads/2023/01/shutterstock_1373689742-2048x1356.jpg')

puts "#{Animal.count} animals created"

Meal.destroy_all

Meal.create(:name => 'Beef', :calories => 999, :image => 'https://media-cdn2.greatbritishchefs.com/media/jgfjeg4x/img24388.whqc_2846x1422q90.webp')
Meal.create(:name => 'Spider', :calories => 2, :image => 'https://www.thesun.co.uk/wp-content/uploads/2020/07/NINTCHDBPICT000594068517.jpg')

puts "#{Meal.count} meals created"