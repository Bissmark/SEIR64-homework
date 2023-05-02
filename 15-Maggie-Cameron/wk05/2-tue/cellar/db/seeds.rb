Wine.destroy_all

Wine.create :name => 'Tonic', :region => 'Adelaide Hills', :color => 'White'
Wine.create :name => 'Penfolds Grange', :region => 'Barossa', :color => 'Red'
Wine.create :name => 'Gut Oggau', :region => 'Austria', :color => 'Rose'

puts "#{ Wine.count } wines created."







