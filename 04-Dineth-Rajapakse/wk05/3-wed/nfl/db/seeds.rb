# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Team.destroy_all

Team.create(:name => 'Arizona Cardinals', :owner => 'Michael Bidwill', :championships => '0', :image => 'https://a.espncdn.com/i/teamlogos/nfl/500/ari.png')
Team.create(:name => 'New York Giants', :owner => 'John Mara', :championships => '4', :image => 'https://cdn.bleacherreport.net/images/team_logos/328x328/new_york_giants.png')
Team.create(:name => 'Kansas City Chiefs', :owner => 'Clark Hunt', :championships => '3', :image => 'https://i.bleacherreport.net/images/team_logos/328x328/kansas_city_chiefs.png?canvas=492,328')
Team.create(:name => 'Denver Broncos', :owner => 'Walter-Penner Family', :championships => '3', :image => 'https://a.espncdn.com/i/teamlogos/nfl/500/den.png')
Team.create(:name => 'Philadelphia Eagles', :owner => 'Jeffrey Lurie', :championships => '1', :image => 'https://seeklogo.com/images/P/philadelphia-eagles-logo-018F9784F0-seeklogo.com.png')

puts "#{ Team.count } teams created."