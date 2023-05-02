Mountain.destroy_all

Mountain.create :name => 'Mount Everest', :height => 8848
Mountain.create :name => 'K2', :height => 8611

puts "#{ Mountain.count } mountains created"
