Asteroid.destroy_all

Asteroid.create :name => 'Vesta', :designation => "4 Vesta", :orbit => "Asteroid Belt", :size => 525, :funfact => "Named for the goddess of the hearth"

puts "#{Asteroid.count} celestial objects created."

# name TEXT,
# designation TEXT,
# image TEXT,
# orbit TEXT,
# size FLOAT,
# funfact TEXT