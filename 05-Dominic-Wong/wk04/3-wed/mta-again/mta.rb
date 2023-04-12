
def plan_trip(origin_line, origin_station, destination_line, destination_station) 
    
    lines = {
        :N => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th' ],
        :L => ['8th', '6th', 'Union Square', '3rd', '1st'],
        6 => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    }

    origin_index = lines[origin_line].index(origin_station)
    destination_index = lines[destination_line].index(destination_station)
    
    if origin_line == destination_line  #single-line trip
        
        if origin_index < destination_index # if index increment
            
            trip = lines[origin_line][origin_index..destination_index]
            # puts "You must travel through these stops on the #{origin_line} line: #{trip.join(', ')}"
            
        else 
            
            trip = lines[origin_line][destination_index..origin_index].reverse
            
        end 

        puts "Your trip will have #{trip.size} stops in total"
        puts "You must travel through these stops on the #{origin_line} line: #{trip.join(', ')}"
        
    else # multi-line trip
        
        intersection = "Union Square" # intersection variable
        origin_int_index = lines[origin_line].index(intersection)
        destination_int_index = lines[destination_line].index(intersection)

        if origin_index < lines[origin_line].index(intersection)

            o_trip = lines[origin_line][origin_index..origin_int_index]
          

        else

            o_trip = lines[origin_line][origin_int_index..origin_index].reverse
          

        end

        if destination_int_index  < destination_index

            d_trip = lines[destination_line][destination_int_index..destination_index].drop(1) # call drop to remove first element which is Union Square
          

        else

            d_trip = lines[destination_line][destination_index..destination_int_index].reverse.drop(1)
          

        end

        puts "Your trip will have #{o_trip.size + d_trip.size} stops in total."
        puts "You must travel through these stops on the #{origin_line} line: #{o_trip.join(', ')}"
        puts "Change at #{intersection}"
        puts "Continue your journey through these stops on the #{destination_line} line: #{d_trip.join(', ')}"
    
    
    end
    
end

def input_cleaner( input ) # input is get 
    
    if input.match?(/\A-?\d+\Z/)
        input.chomp.to_i
    else
        input.chomp.upcase.to_sym
    end

end

# Main #

print "What is your origin line: "
origin_line = input_cleaner(gets)
p origin_line

print "What is your origin station: "
origin_station = gets.chomp
p origin_station

print "What is your destination line: "
destination_line = input_cleaner(gets)
p destination_line

print "What is your destination station: "
destination_station = gets.chomp
p destination_station

puts "-=" * 25

plan_trip(origin_line, origin_station, destination_line, destination_station)


# plan_trip(:N, "Times Square", :N, 'Union Square')
# plan_trip(:N, 'Union Square', :N, 'Times Square')

# plan_trip(:N, 'Times Square', :L, '1st')
# plan_trip(:N, 'Times Square', 6, 'Grand Central')

# plan_trip(:N, 'Times Square', :L, '1st')
# plan_trip(:N, 'Times Square', 6, 'Grand Central')
