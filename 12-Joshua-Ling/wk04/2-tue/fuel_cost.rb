#distance (km)
#Fuel efficiency (L/100km)
#Fuel Price (per L)
#speed (km/h)

puts "CALCULATE TRIP TIME"
print "Distance in km "
dist = gets.to_f
print "Fuel Efficiency (L per 100km) "
efficiency = gets.to_f
print "Fuel Price (per L) "
price = gets.to_f
print "Travel Speed (km per Hour) "
speed = gets.to_f

puts "Trip Time is #{dist/speed} hours"
puts "Trip Cost is $#{efficiency/100 * dist}" 

puts "Staying at home is free"
