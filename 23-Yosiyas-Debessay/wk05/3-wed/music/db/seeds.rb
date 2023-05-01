Artist.destroy_all

Artist.create(:name => 'The Weeknd', :genre => 'R&B', :dob => '1990-02-16', :genre => 'R&B', :image => 'https://upload.wikimedia.org/wikipedia/commons/9/99/The_Weeknd_in_2019.png')
Artist.create(:name => 'D-Block Europe', :genre => 'UK Rap', :dob => '', :genre => 'UK drill', :image => 'https://upload.wikimedia.org/wikipedia/commons/e/e5/D-Block_Europe.jpg')
Artist.create(:name => 'Tupac', :genre => 'Hip Hop', :dob => '1971-06-16', :genre => 'Hip-hop', :image => 'https://upload.wikimedia.org/wikipedia/commons/4/45/Tupac_Amaru_Shakur2.jpg')
Artist.create(:name => 'Tory Lanez', :genre => 'R&B', :dob => '1992-07-27', :genre => 'Hip-hop', :image => 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Tory_Lanez_in_April_2018.jpg')
Artist.create(:name => '50 Cent', :genre => 'Hip Hop', :dob => '1975-07-06', :genre => 'Hip-hop', :image => 'https://upload.wikimedia.org/wikipedia/commons/c/c4/50_Cent_at_the_European_Premiere_of_Spy_Large.jpg')
Artist.create(:name => 'Asake', :genre => 'Afrobeats', :dob => '', :genre => 'Afrobeats', :image => 'https://i.ytimg.com/vi/erQ2ru_R6N0/maxresdefault.jpg')
Artist.create(:name => 'Ice-Spice', :genre => 'Hip Hop', :dob => '', :genre => 'Afrobeats', :image => 'https://pbs.twimg.com/media/E-5Z8n_XIAAQbJn.jpg')
Artist.create(:name => 'Frank Ocean', :genre => 'Aternative R&B, Neo Soul', :dob => '1987-10-28', :genre => 'R&B', :image => 'https://upload.wikimedia.org/wikipedia/commons/6/60/Frank_Ocean_Interview_Magazine.jpg')
Artist.create(:name => 'Melii', :genre => 'R&B', :dob => '1997-04-27', :genre => 'Hip-hop', :image => 'https://upload.wikimedia.org/wikipedia/commons/6/66/Melii_-_La_Voz.jpg')

puts "#{Artist.count} artists created."


Album.destroy_all

Album.create(:title => 'Starboy', :year => '2016', :not => '18',  :genre => 'R&B & Pop', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=29145')
Album.create(:title => 'The Blue Print - Us Vs. Them', :year => '2020', :not => '29', :genre => 'UK rap & trap', :image => 'https://images-na.ssl-images-amazon.com/images/I/71iHQHlNtwL._SL1200_.jpg')
Album.create(:title => 'All Eyez on Me', :year => '1996', :not => '27', :genre => 'West Coast hip hop', 'gangsta rap', :image => 'https://upload.wikimedia.org/wikipedia/en/2/24/All_Eyez_on_Me_%28Tupac_Shakur_album%29.png')
Album.create(:title => 'I Told You', :year => '2016', :not => '14', :genre => 'Hip hop', 'R&B', :image => 'https://upload.wikimedia.org/wikipedia/en/e/e6/ToryLanez-IToldYou.jpg')
Album.create(:title => 'Get Rich or Die Tryin', :year => '2003', :not => '18', :genre => 'Hip hop', 'gangsta rap', :image => 'https://upload.wikimedia.org/wikipedia/en/1/1c/50_Cent_Get_Rich_or_Die_Tryin%27_album_cover.jpg')
Album.create(:title => 'Maso', :year => '2021', :not => '6', :genre => 'Afrobeats % Pop', :image => 'https://m.media-amazon.com/images/I/61NlBFjcJZL._SS500_.jpg')
Album.create(:title => 'L.I.F.E - Love Is For Everyone', :year => '2021', :not => '9', :genre => 'Hip hop, R&B', :image => 'https://m.media-amazon.com/images/I/71WOfF8IT1S._SS500_.jpg')
Album.create(:title => 'Blonde', :year => '2016', :not => '17', :genre => 'Alternative R&B', 'neo soul', :image => 'https://upload.wikimedia.org/wikipedia/en/f/f1/Frank_Ocean_-_Blonde.jpeg')
Album.create(:title => 'Phases', :year => '2018', :not => '14', :genre => 'Hip hop', 'R&B', :image => 'https://upload.wikimedia.org/wikipedia/en/7/77/Melii_Phanes.jpg')

puts "#{ Album.count } albums created."