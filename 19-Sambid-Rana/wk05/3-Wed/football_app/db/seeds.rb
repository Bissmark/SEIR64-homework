# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Club.destroy_all

Club.create( :name => "Manchester United", :location => "Old Trafford, Greater Manchester, England", :titles_won => 68, :stadium_cap => 74140, :image => "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png" )
Club.create( :name => "Real Madrid", :location => "Madrid, Spain", :titles_won => 90, :stadium_cap => 81044, :image => "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png" )
Club.create( :name => "FC Barcelona", :location => "Barcelona, Catalonia, Spain", :titles_won => 87, :stadium_cap => 99354, :image => "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png" )
Club.create( :name => "Bayern Munich", :location => "Munich, Germany", :titles_won => 31, :stadium_cap => 75000, :image => "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/FC_Bayern_Munich_logo.svg/1200px-FC_Bayern_Munich_logo.svg.png" )
Club.create( :name => "AC Milan", :location => "Milan, Italy", :titles_won => 48, :stadium_cap => 80018, :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/ACM_Logo.svg/800px-ACM_Logo.svg.png" )

puts "#{ Club.count } clubs created"

Player.destroy_all

Player.create( :name => "Lisandro Martinez", :nationality => "Argentine", :dob => "1998-01-18", :present_club => "Manchester United", :image => "https://upload.wikimedia.org/wikipedia/commons/6/61/Lisandro_Martinez_2022.jpg")
Player.create( :name => "Erling Haaland", :nationality => "Norwegian", :dob => "2000-07-21", :present_club => "Manchester City", :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/2019-07-17_SG_Dynamo_Dresden_vs._Borussia_Dortmund_by_Sandro_Halank%E2%80%94228_%28cropped%29.jpg/800px-2019-07-17_SG_Dynamo_Dresden_vs._Borussia_Dortmund_by_Sandro_Halank%E2%80%94228_%28cropped%29.jpg" )
Player.create( :name => "Kylian Mbappé", :nationality => "French", :dob => "1998-12-20", :present_club => "Paris Saint-Germain", :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Kylian_Mbapp%C3%A9_with_the_2018_FIFA_World_Cup_trophy.jpg/800px-Kylian_Mbapp%C3%A9_with_the_2018_FIFA_World_Cup_trophy.jpg" )
Player.create( :name => "Jude Bellingham", :nationality => "English", :dob => "2003-06-29", :present_club => "Borussia Dortmund", :image => "https://upload.wikimedia.org/wikipedia/commons/1/1b/2021-06-02_Fussball%2C_Maenner%2C_Laenderspiel%2C_Deutschland_vs._Daenemark_und_Tuerkei_vs._Guatemala_by_Sandro_Halank%E2%80%94234.jpg" )
Player.create( :name => "Ansu Fati", :nationality => "Spanish", :dob => "2002-10-31", :present_club => "Barcelona", :image => "https://upload.wikimedia.org/wikipedia/commons/2/2b/Ansu_Fati_2022.jpg" )

puts "#{ Player.count } players created"
