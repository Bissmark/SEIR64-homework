line = {
    "N" => {
      :train_stop => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
    },
    "L" => {
        :train_stop => ["8th", "6th", "Union Square", "3rd", "1st"]
    },
    "6" => {
        :train_stop => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    },
  }

def plan_trip (start_line, trip_a, change_line, trip_b, line)
    

    if change_line == " "
    #----------------------
    # SAME TRAIN LINE TRAVEL 
    #----------------------

        # INDEX OF TRIP_A
        index_a = line[start_line][:train_stop].index(trip_a)

        # INDEX OF TRIP_B
        index_b = line[start_line][:train_stop].index(trip_b)

        #----------------------
        # CALCULATE STOPS TOTAL
        #----------------------
        num_a = index_a + 1 
        num_b = index_b + 1 

        # if negative, turn positive
        total_stops = (num_a - num_b).abs

        # stops total
        puts "#{ total_stops } stops in total"

        #----------------------
        # STOPS IN BETWEEN
        #----------------------
       
        if index_a < index_b
         # travelling forward

            # get the array
            station_stop = line[start_line][:train_stop][num_a, index_b].join(", ")

            #result
            puts "You must travel through the following stops on the #{ start_line } line: #{ station_stop }."

        else
        # travelling backward

            # get the array
            station_stop = line[start_line][:train_stop][index_b, index_a].reverse.join(", ")
            
            # result
            puts "You must travel through the following stops on the #{ start_line } line: #{ station_stop }."
        end

    else 
        #----------------------
        # MUST CHANGE LINES
        #----------------------

        # INDEX OF TRIP_A
        index_a = line[start_line][:train_stop].index(trip_a)

        # the stop after A | calculate stops
        num_a = index_a + 1

        # INDEX OF INTERCHANGE
        index_interchange = line[start_line][:train_stop].index("Union Square") #4

        # calculate stops
        interchange_stop_a = index_interchange + 1

        #----------------------
        # STOPS IN BETWEEN
        #----------------------
        if index_a < index_interchange
        # travelling forward    

            # get the array
            station_stop = line[start_line][:train_stop][num_a, index_interchange].join(", ")
            
            #result
            puts "You must travel through the following stops on the #{ start_line } line: #{ station_stop }."


        else index_interchange < index_a   
        # travelling backward

            # get the array
            station_stop = line[start_line][:train_stop][index_interchange, num_a].reverse.join(", ")
            #result
            puts "You must travel through the following stops on the #{ start_line } line: #{ station_stop }."
        end

        #----------------------
        # INTERCHANGE
        #----------------------
        puts "Change at Union Square."

        #----------------------
        # NEXT JOURNEY
        #----------------------
        # INDEX OF TRIP_B
        index_b = line[change_line][:train_stop].index(trip_b)

        # the stop after B | calculate stops
        num_b = index_b + 1 

        # INDEX OF INTERCHANGE AT NEW LINE
        index_interchange = line[change_line][:train_stop].index("Union Square")

        # the stop before interchange 
        before_interchange = index_interchange - 1

        # the stop after interchange 
        after_interchange = index_interchange + 1

        # calculate stops
        interchange_stop_b = index_interchange + 1

        if index_interchange < index_b
            
            # get the array => travelling forward
            station_stop = line[change_line][:train_stop][after_interchange, index_b].join(", ")
                
            puts "Your journey continues through the following stops: #{ station_stop }"

        else
            # get the array => travelling backwards
            station_stop = line[change_line][:train_stop][index_b, before_interchange].reverse.join(", ")
            
            puts "Your journey continues through the following stops: #{ station_stop }"
        end
        
        #----------------------
        # TOTAL STOPS
        #----------------------

        # NOTE: num_a/b and interchange_stop a/b already added +1 to count index 0 spots

        # trip A stops
        stops_a = (num_a - interchange_stop_a).abs

        # trip B stops
        stops_b = (num_b - interchange_stop_b).abs

        puts "#{stops_a + stops_b} stops in total"
    end

end


# # ONE LINE, TRAVELLING FORWARD
puts plan_trip "N", "Times Square", " ", "23rd", line

# #ONE LINE, TRAVELLING BACKWARD
puts plan_trip "N", "23rd", " ", "Times Square", line

# CHANGE TRAIN LINE
puts plan_trip "N", "Times Square", "6", "33rd", line

# TESTS FOR TRAVELLING BACKWARD + FORWARD
puts plan_trip "N", "8th", "6", "Astor Place", line

puts plan_trip "N", "8th", "L", "1st", line

# plan_trip (start_line, trip_a, change_line, trip_b, line)


# binding.irb
