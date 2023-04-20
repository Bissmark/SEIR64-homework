Artist.destroy_all

Artist.create(:name => "Kendrick Lamar", :genre => "Hip Hop", :recordlabel => "TDE", :hometown => "Compton, California", :image => "https://example.com/kendrick.jpg")
Artist.create(:name => "Cardi B", :genre => "Hip Hop", :recordlabel => "Atlantic Records", :hometown => "Bronx, New York", :image => "https://example.com/cardi.jpg")
Artist.create(:name => "Drake", :genre => "Hip Hop/R&B", :recordlabel => "OVO Sound/Republic Records", :hometown => "Toronto, Canada", :image => "https://example.com/drake.jpg")
Artist.create(:name => "Beyoncé", :genre => "R&B/Pop", :recordlabel => "Parkwood Entertainment/Columbia Records", :hometown => "Houston, Texas", :image => "https://example.com/beyonce.jpg")
Artist.create(:name => "Jay-Z", :genre => "Hip Hop", :recordlabel => "Roc Nation", :hometown => "Brooklyn, New York", :image => "https://example.com/jayz.jpg")

puts "#{ Artist.count } artists created."

Album.destroy_all

Album.create(name: "DAMN.", genre: "Hip Hop", releasedate: "2017-04-14", length: "55:09", image: "https://example.com/kendrick-damn.jpg")
Album.create(name: "Invasion of Privacy", genre: "Hip Hop", releasedate: "2018-04-05", length: "48:13", image: "https://example.com/cardi-invasion.jpg")
Album.create(name: "Scorpion", genre: "Hip Hop/R&B", releasedate: "2018-06-29", length: "90:00", image: "https://example.com/drake-scorpion.jpg")
Album.create(name: "Lemonade", genre: "R&B/Pop", releasedate: "2016-04-23", length: "45:43", image: "https://example.com/beyonce-lemonade.jpg")
Album.create(name: "The Blueprint", genre: "Hip Hop", releasedate: "2001-09-11", length: "63:08", image: "https://example.com/jayz-blueprint.jpg")


puts "#{ Album.count } albums created."