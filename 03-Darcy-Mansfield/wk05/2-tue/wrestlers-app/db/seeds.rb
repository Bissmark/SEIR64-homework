Wrestler.destroy_all

Wrestler.create :name => "Kenta Kobashi", :image => "kenta.jpg", :height => 186, :weight => 115, :exp => 25
Wrestler.create :name => "Mitsuharu Misawa", :image => "mitsuharu.jpg", :height => 185, :weight => 110, :exp => 27
Wrestler.create :name => "Mayu Iwatani", :image => "mayu.jpg", :height => 163, :weight => 53, :exp => 12
Wrestler.create :name => "Andreza Giant Panda", :image => "panda.jpg", :height => 256, :weight => 108, :exp => 5

puts "#{ Wrestler.count } wrestlers created."