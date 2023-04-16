# # MTA Lab

# ## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.

# #### Activity
# * Create a program that models a simple subway system.

# * The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# ```ruby
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# ```

# * There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

# Define Lines and give each station a line key to differentiate between stations with the same name on different lines 
n_line = [
  { name: "Times Square", line: :n },
  { name: "34th", line: :n },
  { name: "28th", line: :n },
  { name: "23rd", line: :n },
  { name: "UNION_SQUARE", line: [:n, :l, :six] },
  { name: "8th", line: :n }
]

l_line = [
  { name: "8th", line: :l },
  { name: "6th", line: :l },
  { name: "UNION_SQUARE", line: [:n, :l, :six] },
  { name: "3rd", line: :l },
  { name: "1st", line: :l }
]

six_line = [
  { name: "Grand Central", line: :six },
  { name: "33rd", line: :six },
  { name: "28th", line: :six },
  { name: "23rd", line: :six },
  { name: "UNION_SQUARE", line: [:n, :l, :six] },
  { name: "Astor Place", line: :six }
]

# create another array from the above arrays for all lines 
all_lines = [n_line, l_line, six_line]
all_stops = []

all_lines.each do |line|
  line.each do |station|
    all_stops << station
  end
end

#Input start station and line and end station and line 
start_station = { name: "Times Square", line: :n }
end_station = { name: "23rd", line: :six }

start_line_stations = all_stops.select { |station| station[:line] == start_station[:line] }
end_line_stations = all_stops.select { |station| station[:line] == end_station[:line] }

start_index = start_line_stations.index(start_station)
end_index = end_line_stations.index(end_station)

#if stations are on the same line 
if start_index && end_index
  if start_station[:line] == end_station[:line]
    if start_index < end_index
      stops = end_index - start_index
      puts "There are #{stops} stops between #{start_station[:name]} on line #{start_station[:line]} and #{end_station[:name]} on line #{end_station[:line]}:"
      (start_index..end_index).each do |index|
        station = start_line_stations[index]
        puts "#{station[:name]} on line #{station[:line]}"
        if station[:name] == "UNION_SQUARE"
          puts "Change at Union Square"
        end
      end
   # if stations are not on the same line 
    else
      stops = start_index - end_index
      puts "There are #{stops} stops between #{start_station[:name]} on line #{start_station[:line]} and #{end_station[:name]} on line #{end_station[:line]}:"
      (end_index..start_index).reverse_each do |index|  # reverse each to count backwards from index of change 
        station = start_line_stations[index]
        puts "#{station[:name]} on line #{station[:line]}"
        if station[:name] == "UNION_SQUARE"
          puts "Change at Union Square"
        end
      end
    end
  #change Union Square calculation - i had to look this up as it was the hardest part
  else
    union_square_start_index = start_line_stations.index { |station| station[:name] == "UNION_SQUARE" }
    union_square_end_index = end_line_stations.index { |station| station[:name] == "UNION_SQUARE" }
    first_leg_stops = start_index - union_square_start_index
    second_leg_stops = union_square_end_index - end_index
    total_stops = first_leg_stops.abs + second_leg_stops.abs
    puts "There are #{total_stops} stops between #{start_station[:name]} on line #{start_station[:line]} and #{end_station[:name]} on line #{end_station[:line]}:"
    (union_square_start_index..start_index).reverse_each do |index|
      station = start_line_stations[index]
      puts "#{station[:name]} on line #{station[:line]}"
      if station[:name] == "UNION_SQUARE"
        puts "Change at Union Square"
      end
    end
    puts "Continue on the #{end_station[:line]} line:"
    (end_index..union_square_end_index).each do |index|
      station = end_line_stations[index]
      puts "#{station[:name]} on line #{station[:line]}"
      if station[:name] == "UNION_SQUARE"
        puts "Change at Union Square"
      end
    end
  end

end

