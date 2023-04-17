def info
    menu = "Trip Calculator"
    centered_menu = menu.center(80)
    puts centered_menu 
    puts "-=" * 40 

end

info

def trip_time_cal(distance, speed)
    distance / speed
end

def trip_cost_cal(distance, mile_per_gallon, price_per_gallon)
    (distance / mile_per_gallon) * price_per_gallon
end


print "Enter the distance of the trip in miles: "
distance = gets.to_f
print "Enter the miles per gallon: "
mile_per_gallon = gets.to_f
print "Enter the price per gallon: $"
price_per_gallon = gets.to_f
print "Enter the speed in miles per hour: "
speed = gets.to_f

time = trip_time_cal(distance, speed).round(2)
cost = trip_cost_cal(distance, mile_per_gallon, price_per_gallon).to_i

puts "The trip will take #{time} hours and cost #{cost} dollars."