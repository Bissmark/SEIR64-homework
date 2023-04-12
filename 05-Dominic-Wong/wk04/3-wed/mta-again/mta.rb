
# Line validation function

# example is N line USquare to TSquare

def plan_trip(origin_line, origin_station, destination_line, destination_station) 
    
    lines = {
        :N => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th' ],
        :L => ['8th', '6th', 'Union Square', '3rd', '1st'],
        6 => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    }

    origin_index = lines[origin_line].index(origin_station)
    destination_index = lines[destination_line].index(destination_station)
    intersection = "Union Square"
    
    if origin_line == destination_line  #single-line trip

        if origin_index < destination_index # if index increment

            trip = lines[origin_line][origin_index..destination_index]
            puts "You must travel through these stops on the #{origin_line} line: #{trip.join(', ')}"

        else 

            trip = lines[origin_line][destination_index..origin_index]
            puts "You must travel through these stops on the #{origin_line} line: #{trip.reverse.join(', ')}"

        end 

    else # multi-line trip

        if 
    
    end
    
end


# plan_trip(:N, 'Times Square', :N, 'Union Square')
# plan_trip(:N, 'Union Square', :N, 'Times Square')

plan_trip(:N, 'Times Square', :L, '1st')


