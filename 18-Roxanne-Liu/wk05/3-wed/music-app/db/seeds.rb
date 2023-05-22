# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.destroy_all

Artist.create(:name => 'Adele', :nationality => 'England', :dob => '1988-05-05', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Adele_-_Live_2009_%284%29.jpg/1280px-Adele_-_Live_2009_%284%29.jpg')
Artist.create(:name => 'Ed Sheeran', :nationality => 'England', :dob => '1991-02-17', :image => 'https://pbs.twimg.com/profile_images/1284070315602186240/5AiA6glT_400x400.jpg')
Artist.create(:name => 'Taylor Swift', :nationality => 'US', :dob => '1989-12-13', :image => 'https://i.pinimg.com/736x/9d/55/77/9d5577c65c08060ef8a13c5b0f900395.jpg')
Artist.create(:name => 'Michael Jackson', :nationality => 'US', :dob => '1958-08-29', :image => 'https://i.pinimg.com/originals/50/4d/a6/504da64632054a1237dd7c3767ed72e9.jpg')
Artist.create(:name => 'The Weeknd', :nationality => 'Canada', :dob => '1990-02-16', :image => 'https://www.rollingstone.com/wp-content/uploads/2021/01/the-weeknd-video.jpg')

puts "#{ Artist.count } artists created."

Album.destroy_all

Album.create(:name => '30', :released => '2021', :genre => 'Soul', :image => 'https://upload.wikimedia.org/wikipedia/en/7/76/Adele_-_30.png')
Album.create(:name => 'X', :released => '2014', :genre => 'Pop', :image => 'https://upload.wikimedia.org/wikipedia/en/a/ad/X_cover.png')
Album.create(:name => 'Fearless', :released => '2008', :genre => 'Country pop', :image => 'https://upload.wikimedia.org/wikipedia/en/8/86/Taylor_Swift_-_Fearless.png')
Album.create(:name => 'Thriller', :released => '1982', :genre => 'Pop', :image => 'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png')
Album.create(:name => 'Kiss Land', :released => '2013', :genre => 'R&B', :image => 'https://upload.wikimedia.org/wikipedia/en/e/ed/The_Weeknd_-_Kiss_Land.png')

puts "#{ Album.count } albums created."