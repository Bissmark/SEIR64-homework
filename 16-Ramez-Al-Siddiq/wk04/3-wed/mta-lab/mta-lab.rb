#MTA Lab

#Activity

# Create a program that models a simple subway system.

# Added an object for the subway system where each key represents a subway line and each value is an array of the stops of that respective line.

subway = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

#Added a method that accepts 4 arguments 

def plan_trip(subway, start_line, start_stop, end_line, end_stop)
    
    # The indices of the starting and ending stops on their respective subway lines.

    start_index = subway[start_line].index(start_stop)
    end_index = subway[end_line].index(end_stop)

    # The index of Union Square on each line.

    union_index_start = subway[start_line].index("Union Square")
    union_index_end = subway[end_line].index("Union Square")

    # If the starting and ending lines are the same, retrieve the stops the user will pass through on that line.

    if start_line == end_line
        
        # If the user is traveling forward, retrieve the stops between the starting and ending destination.

        if start_index < end_index
            stops = subway[start_line][start_index..end_index]
            
            # The number of stops is one less than the number of elements in the stops array.
            num_stops = stops.length - 1 

            # If the user is traveling in the reverse direction, retrieve the stops between the ending and starting destinations and reverse the order.
        
        else
            stops = subway[start_line][end_index..start_index].reverse
            num_stops = stops.length - 1 
        end
        
        # Print the stops on the line and the total number of stops.

        puts "You must travel through the following stops on the #{start_line} line: #{stops.join(", ")}."
        puts "#{num_stops} stops in total."

        # If the starting and ending lines are different, retrieve the stops the user will pass through on the first and second lines.

        else

        # If the user is starting before Union Square on the first line, retrieve the stops between the starting stop and Union Square.

        if start_index < union_index_start
            stops1 = subway[start_line][start_index..union_index_start]

            # If the user is starting after Union Square on the first line, retrieve the stops between Union Square and the starting stop and reverse the order.

        else
            stops1 = subway[start_line][union_index_start..start_index].reverse
        end

        # If the user is ending after Union Square on the second line, retrieve the stops between Union Square and the ending stop.

        if union_index_end < end_index
            stops2 = subway[end_line][union_index_end..end_index]

        # If the user is ending before Union Square on the second line, retrieve the stops between the ending stop and Union Square and reverse the order.

        else
            stops2 = subway[end_line][end_index..union_index_end].reverse
        end

        # Calculate the total number of stops by adding the number of stops on each line.

        num_stops = stops1.length - 1 + stops2.length - 1

        # Print the stops on the first line, the message about changing at Union Square, and the stops on the second line, as well as the total number of stops.

        puts "You must travel through the following stops on the #{start_line} line: #{stops1.join(", ")}."
        puts "Change at Union Square."
        puts "Your journey continues through the following stops on the #{end_line} line: #{stops2.join(", ")}."
        puts "#{num_stops} stops in total."
  end
end

# Testing sample trips.
plan_trip(subway, "N", "Times Square", "6", "33rd")
plan_trip(subway, "N", "Times Square", "N", "8th")
plan_trip(subway, "L", "8th", "6", "Grand Central")