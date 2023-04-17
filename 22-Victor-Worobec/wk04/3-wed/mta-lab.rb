$train_lines = {
    N: %w[ 34th 28th 23rd Union_Square ],
    L: %w[ 8th 6th Union_Square 3rd 1st ],
    '6': %w[ Grand_Central 33rd 28th 23rd Union_Square Astor_Place ]
}

# NOTE - I was going to break this down into smaller functions and apply DRY principles but I've already spent 7 hrs doing this - had problems due to parsing string literals into the arguments before remembering to_sym. Issue was resolved and user input works via 'gets' though not enabled at the moment
def plan_trip (current_line, current_station, destination_line, destination_station)

    # Variables needed for output and index finding
    list_of_stations = []
    intersecting_station = 'Union_Square'

    # Get indexes of stations
    current_station_index = $train_lines[current_line].index(current_station)
    destination_station_index = $train_lines[current_line].index(destination_station)

    # *** Same line traversal
    if current_line == destination_line

        # If destination station is forwards in array
        if current_station_index < destination_station_index

            # Cut array from one index to the other
            list_of_stations = $train_lines[current_line][current_station_index..destination_station_index]

        end

        # If destination station is backwards in array
        if current_station_index > destination_station_index

            # Cut array from one index to the other, then reverse it
            list_of_stations = $train_lines[current_line][destination_station_index..current_station_index].reverse

        end

        return list_of_stations
    end

    # *** Different line traversal
    if current_line != destination_line
        intersecting_station_index = $train_lines[current_line].index(intersecting_station)

        # If intersecting station is forwards in array
        if current_station_index < intersecting_station_index

            # Cut array from one index to the other
            list_of_stations = $train_lines[current_line][current_station_index..intersecting_station_index]

        end

        # If intersecting station is backwards in array
        if current_station_index > intersecting_station_index

            # Cut array from one index to the other, then reverse it
            list_of_stations = $train_lines[current_line][intersecting_station_index..current_station_index].reverse

        end

        # Change current travelling line and update indexes to indexes along new line
        current_line = destination_line
        current_station_index = $train_lines[current_line].index(intersecting_station)
        destination_station_index = $train_lines[current_line].index(destination_station)

        # Notify the user if they have to change lines, has a check for if destination station is same but on different line
        if current_station != destination_station
            list_of_stations = list_of_stations + ["***CHANGE LINES***"]
        end

        # If destination station is forwards in array
        if current_station_index < destination_station_index

            # Cut array from one index to the other
            list_of_stations = list_of_stations + $train_lines[current_line][current_station_index..destination_station_index]
        end

        # If destination station is backwards in array
        if current_station_index > destination_station_index

            # Cut array from one index to the other, then reverse it
            list_of_stations = list_of_stations + $train_lines[current_line][destination_station_index..current_station_index].reverse
        end

        return list_of_stations
    end
end

# print "Current Line: "
# current_line = gets.chomp.to_sym
# p plan_trip(current_line , '34th', current_line, '23rd') #forwards, user input
p plan_trip(:'N' , '34th', :'N', '23rd') #forwards
p plan_trip(:'N' , 'Union_Square', :'N', '34th') #backwards
p plan_trip(:'N' , '34th', :'N', '34th') #same station, same line
p plan_trip(:'N' , 'Union_Square', :'N', 'Union_Square') #same connecting station, same line
p plan_trip(:'N' , 'Union_Square', :'L', 'Union_Square') #same connecting station, different line
p plan_trip(:'N' , '34th', :'6', 'Grand_Central') #line switch forwards then backwards
p plan_trip(:'6' , '33rd', :'L', '1st') #line switch forwards then forwards
p plan_trip(:'6' , 'Astor_Place', :'L', '8th') #line switch backwards then backwards
p plan_trip(:'6' , 'Astor_Place', :'L', '1st') #line switch backwards then forwards

# planTrip(`6`, `33rd`, `L`, `8th`)
# planTrip(`L`, `Union Square`, `N`, `34th`)
# planTrip(`L`, `Union Square`, `L`, `Union Square`) 
# planTrip(`L`, `Union Square`, `N`, `Union Square`)

# MTA Lab
# Objectives:
# Apply your knowledge of Ruby to solve a real world problem.
# Get really good at array manipulation.
# Activity
# Create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# Hints:
# Work out how you would do it on paper first! Then start to explain that process in Ruby.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: index)
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated