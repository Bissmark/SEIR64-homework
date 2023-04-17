#Create a program that models a simple subway system.
#The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

six_line = ["Grand Central", "3rd", "28th", "23rd", "Union Square", "Astor Place"]
n_line = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
l_line  = ["1st", "3rd", "Union Square", "6th", "8th"]

# working out trip on one line only
#get the variable of starting and ending stations and find the index of starting station and index of ending station
# to get the number of stops ending station - starting station. use abs()

# def n_line_ride(starting_station, ending_station)
#     index_of_starting_station = n_line.find_index(starting_station)
#     index_of_ending_station = n_line.find_index(ending_station)
#     starting_index = (index_of_starting_station).abs
#     ending_index = (index_of_ending_station).abs
#     how_many_stops = ending_index - starting_index
# end

# work out the number of stops to Union Square from each stop on each line
# work out the number of stops on each line if the travel takes one line
#6 line
def stops_on_line(starting_station, ending_station, line)
    six_line = ["Grand Central", "3rd", "28th", "23rd", "Union Square", "Astor Place"]
    n_line = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
    l_line  = ["1st", "3rd", "Union Square", "6th", "8th"]

    if (line == "6")
        line_stops = six_line
    elsif (line == "n")
        line_stops = n_line
    else
        line_stops = l_line
    end

    index_of_starting_station = line_stops.find_index(starting_station)
    index_of_ending_station = line_stops.find_index(ending_station)

    increment_or_decrement = (index_of_ending_station > index_of_starting_station) ? +1 : -1
    all_stops = []
    
    i = index_of_starting_station + increment_or_decrement
    until i == index_of_ending_station
        all_stops << line_stops[i]
        i = i + increment_or_decrement
    end
    puts "You must travel through #{all_stops} stops on line #{line}."
    puts "You must exit on #{line_stops[index_of_ending_station]}"
end

stops_on_line("3rd", "8th", "l")
stops_on_line("Union Square", "34th", "n")
def stops_for_route(start_line, start, final_line, final_stop)



    # stops_on_line(???)
end

stops_on_line("3rd", "8th", "l")
stops_on_line("Union Square", "34th", "n")

