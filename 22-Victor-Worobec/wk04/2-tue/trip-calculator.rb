def calculate_time (distance_in_kilometres, kilometres_per_hour)
    trip_time = distance_in_kilometres / kilometres_per_hour
    print "Your trip will take #{ trip_time } hours, or #{ trip_time * 60 } minutes. "
end

def calculate_cost_on_distance (distance_in_kilometres, kilometres_per_litre, price_per_litre)
    litres_needed = distance_in_kilometres / kilometres_per_litre
    trip_cost = litres_needed * price_per_litre
    print "You will need #{ litres_needed }L of fuel. It will cost $#{ trip_cost } to cover the trip. "
end

print "How many kilometres is the trip? "
distance = gets.to_f
print "How fast are you travelling (km/h)? "
kilometres_per_hour = gets.to_f
print "How many kilometres does your vehicle get per litre? "
kilometres_per_litre = gets.to_f
print "How much is fuel at the moment? "
price_per_litre = gets.to_f

calculate_time(distance, kilometres_per_hour)
calculate_cost_on_distance(distance, kilometres_per_litre, price_per_litre)

# Trip Calculator
# Calculate a trip time and cost given inputs for

# distance
# miles per gallon
# price per gallon
# speed in miles per hour