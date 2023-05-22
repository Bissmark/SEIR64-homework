SUBWAY_LINES = {
  "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

def plan_trip(start_line, start_station, end_line, end_station)
  if start_line == end_line
    stops = stops_on_same_line(start_line, start_station, end_station)
    puts "You must travel through the following stops on the #{start_line} line: #{stops.join(', ')}."
  else
    first_leg_stops = stops_on_same_line(start_line, start_station, "Union Square")
    second_leg_stops = stops_on_same_line(end_line, "Union Square", end_station)
    total_stops = first_leg_stops.length + second_leg_stops.length - 1 # subtract 1 for Union Square
    puts "You must travel through the following stops on the #{start_line} line: #{first_leg_stops.join(', ')}."
    puts "Change at Union Square."
    puts "Your journey continues through the following stops on the #{end_line} line: #{second_leg_stops.join(', ')}."
  end
  puts "#{total_stops} stops in total."
end

def stops_on_same_line(line, start_station, end_station)
  stops = SUBWAY_LINES[line]
  start_index = stops.index(start_station)
  end_index = stops.index(end_station)
  if start_index < end_index
    stops[start_index..end_index]
  else
    stops[end_index..start_index].reverse
  end
end

# Prompt the user for input
print "Enter the line you're starting from (N, L, or 6): "
start_line = gets.chomp.upcase
print "Enter the station you're starting from: "
start_station = gets.chomp.capitalize
print "Enter the line you're ending on (N, L, or 6): "
end_line = gets.chomp.upcase
print "Enter the station you're ending at: "
end_station = gets.chomp.capitalize

# Plan the trip and print the results
plan_trip(start_line, start_station, end_line, end_station)