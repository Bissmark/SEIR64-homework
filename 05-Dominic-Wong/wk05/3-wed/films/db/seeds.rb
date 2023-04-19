# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Director.destroy_all

Director.create(:name => 'Martin Scorsese', :dob => 'November 17, 1942', :years => '1962-present', :nationality => 'American', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Martin_Scorsese_Berlinale_2010_%28cropped2%29.jpg/440px-Martin_Scorsese_Berlinale_2010_%28cropped2%29.jpg')
Director.create(:name => 'Steven Spielberg', :dob => 'December 18, 1946', :years => '1969-present', :nationality => 'American', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Steven_Spielberg_by_Gage_Skidmore.jpg/440px-Steven_Spielberg_by_Gage_Skidmore.jpg')
Director.create(:name => 'Sofia Coppola', :dob => 'May 14, 1971', :years => '1972-present', :nationality => 'American', :image => 'https://en.wikipedia.org/wiki/Sofia_Coppola#/media/File:Sofia_Coppola_Cannes_2013.jpg')
Director.create(:name => 'Christopher Nolan', :dob => 'July 30, 1970', :years => '1998-present', :nationality => 'British', :image => 'https://en.wikipedia.org/wiki/Christopher_Nolan#/media/File:Christopher_Nolan_Cannes_2018.jpg')
Director.create(:name => 'Quentin Tarantino', :dob => 'March 27, 1963', :years => '1987-present', :nationality => 'American', :image => 'https://en.wikipedia.org/wiki/Quentin_Tarantino#/media/File:Quentin_Tarantino_by_Gage_Skidmore.jpg')
Director.create(:name => 'Hayao Miyazaki', :dob => 'January 5, 1941', :years => '1963-present', :nationality => 'Japanese', :image => 'https://en.wikipedia.org/wiki/Hayao_Miyazaki#/media/File:Hayao_Miyazaki_cropped_1_Hayao_Miyazaki_201211.jpg')
Director.create(:name => 'Alfred Hitchcock', :dob => 'August 13, 1899', :years => '1919-1980', :nationality => 'British', :image => 'https://en.wikipedia.org/wiki/Alfred_Hitchcock#/media/File:Hitchcock,_Alfred_02.jpg')
Director.create(:name => 'Wes Anderson', :dob => 'May 1, 1969', :years => '1994-present', :nationality => 'American', :image => 'https://en.wikipedia.org/wiki/Wes_Anderson#/media/File:MJK_08478_Wes_Anderson_(Opening_Gala_Berlinale_2018).jpg')

puts "#{ Director.count } directors created"