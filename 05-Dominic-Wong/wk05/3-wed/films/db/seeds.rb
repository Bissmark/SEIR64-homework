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
Director.create(:name => 'Sofia Coppola', :dob => 'May 14, 1971', :years => '1972-present', :nationality => 'American', :image => 'https://static.independent.co.uk/2020/10/21/16/newFile-3.jpg')
Director.create(:name => 'Christopher Nolan', :dob => 'July 30, 1970', :years => '1998-present', :nationality => 'British', :image => 'https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_FMjpg_UX1000_.jpg')
Director.create(:name => 'Quentin Tarantino', :dob => 'March 27, 1963', :years => '1987-present', :nationality => 'American', :image => 'https://faroutmagazine.co.uk/static/uploads/1/2022/12/The-22secret22-to-Quentin-Tarantinos-dialogue.jpg')
Director.create(:name => 'Hayao Miyazaki', :dob => 'January 5, 1941', :years => '1963-present', :nationality => 'Japanese', :image => 'https://cdn.britannica.com/15/201115-050-9CCC50F9/Miyazaki-Hayao-2008.jpg')
Director.create(:name => 'Alfred Hitchcock', :dob => 'August 13, 1899', :years => '1919-1980', :nationality => 'British', :image => 'https://images.mubicdn.net/images/cast_member/1163/cache-3-1337541407/image-w856.jpg')
Director.create(:name => 'Wes Anderson', :dob => 'May 1, 1969', :years => '1994-present', :nationality => 'American', :image => 'https://hips.hearstapps.com/hmg-prod/images/wes-anderson-20617561-1-402.jpg')

puts "#{ Director.count } directors created"

Movie.destroy_all

Movie.create(:name => 'Goodfellas', :box_office => '4710000', :release => '1990', :genre => 'Crime/Drama', :image => 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg')
Movie.create(:name => 'The Goonies', :box_office => '6150000', :release => '1985', :genre => 'Adventure/Comedy', :image => 'https://resizing.flixster.com/6dVrrQ6Ab9z9gpqEBpqGerxQ1lQ=/206x305/v2/https://flxt.tmsimg.com/NowShowing/47041/47041_ah.jpg')
Movie.create(:name => 'Lost in Translation', :box_office => '119700000', :release => '2003', :genre => 'Drama/Romance', :image => 'https://m.media-amazon.com/images/M/MV5BMTUxMzk0NDg1MV5BMl5BanBnXkFtZTgwNDg0NjkxMDI@._V1_.jpg')
Movie.create(:name => 'The Dark Knight', :box_office => '1005000000', :release => '2008', :genre => 'Action/Crime', :image => 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg')
Movie.create(:name => 'Pulp Fiction', :box_office => '213900000', :release => '1994', :genre => 'Crime/Drama', :image => 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg')
Movie.create(:name => 'Spirited Away', :box_office => '384400000', :release => '2001', :genre => 'Animation/Fantasy', :image => 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg')
Movie.create(:name => 'Psycho', :box_office => '50000000', :release => '1960', :genre => 'Horror/Thriller', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg/1200px-Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg')
Movie.create(:name => 'Moonrise Kingdom', :box_office => '68300000', :release => '2012', :genre => 'Comedy/Drama', :image => 'https://www.indiewire.com/wp-content/uploads/2020/04/moonrisekingdom-1.jpg')

puts "#{ Movie.count } movies created"