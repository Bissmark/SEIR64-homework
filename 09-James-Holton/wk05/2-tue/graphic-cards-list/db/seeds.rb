Graphic.destroy_all

Graphic.create :name => 'GeForce RTX 3080 Ti', :release => 'May 31st, 2021', :bus => 'PCIe 4.0 x16', :memory_size => 12, :memory_type => 'GDDR6X', :gpu_clock => 1365, :memory_clock => 1188

Graphic.create :name => 'GeForce RTX 3090', :release => 'Sep 20th, 2022', :bus => 'PCIe 4.0 x16', :memory_size => 24, :memory_type => 'GDDR6X', :gpu_clock => 2235, :memory_clock => 1313

Graphic.create :name => 'Radeon RX 7900 XTX', :release => 'Nov 3rd, 2022', :bus => 'PCIe 4.0 x16', :memory_size => 24, :memory_type => 'GDDR6', :gpu_clock => 1855, :memory_clock => 2500

puts "gpus created: #{ Graphic.count }"