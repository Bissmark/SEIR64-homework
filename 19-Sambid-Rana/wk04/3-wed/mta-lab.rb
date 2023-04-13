# The program takes the LINE and STOP that a user is getting ON at and the LINE and STOP that user is getting OFF at and 
# PRINTS the JOURNEY and the total NUMBER of STOPS for the trip in the console:



# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# There are 3 subway lines:
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


# p lines[ :N ]
# binding.irb


#Not completed
# - Union square intersection task
# - if the index is 0 or length - 1 # prints 2 output at the moment

def plan_trip (*lineNStop) 

    lines = {
        :N => %w[Times-Square 34th 28th 23rd Union-Square 8th],
        :L => "8th 6th Union-Square 3rd 1st".split(" "),
        "6" => %w(Grand-Central 33rd 28th 23rd Union-Square Astor-Place)
    }

    # binding.irb
    
    user_input = [lineNStop].flatten
    line = user_input[0]
    fir_stop = user_input[1]
    lst_stop = user_input[3]

        #For Line N
        
        #Check if first argument is line N   
        if line == :N.to_s

            # check first stop and last stop and then check if it is included in :N
            # check not include Union-Sauare ?
            if lines[:N].include?(fir_stop) and lines[:N].include?(lst_stop)

                #if first stop is greater than last stop
                if (lines[:N].index(fir_stop) < lines[:N].index(lst_stop))
                
                    #print the journey and total no of stops
                    journey = lines[:N][lines[:N].index(fir_stop)..lines[:N].index(lst_stop)].join(', ')
                    no_of_stops = journey.split(', ').size

                    puts "Your will be travelling from line #{ lines.keys[0] } and you have #{ no_of_stops } stops in total which includes stops #{ journey }"
                
                #if last stop is greater than first stop
                elsif (lines[:N].index(fir_stop) > lines[:N].index(lst_stop))
                    #fir_stop = union square to lst_stop = time square 
                    # may be able to use eg -1..-4 instead of reverse
                    rev_trip = lines[:N].reverse
                    puts "-=" * 40

                   journey = rev_trip[rev_trip.index(fir_stop)..rev_trip.index(lst_stop)].join(", ")
                    no_of_stops = journey.split(', ').size
                
                    puts "Your will be travelling from line #{ lines.keys[0] } and you have #{ no_of_stops } stops in total which includes stops #{ journey }"
                
                #if first stop is equal to last stop
                elsif (lines[:N].index(fir_stop) == lines[:N].index(lst_stop)) #should not print if the index is 0 or -1

                    rev_trip = lines[:N].reverse
                    east_frwd_journey = lines[:N].drop(lines[:N].index(fir_stop)).join(", ")
                    east_rev_journey = east_frwd_journey.split(', ').reverse.join(", ")
                    west_rev_journey = lines[:N].take(lines[:N].index(fir_stop)).reverse
                    west_frwd_journey = west_rev_journey.reverse

                    puts "Your have two options,"
                    puts "Option 1: Go East end of line N and your stops will be #{ east_frwd_journey} and take the returning train from there which will include stops #{ east_rev_journey} and total stops for this journey will be #{ east_frwd_journey.split(', ').size + east_rev_journey.split(', ').size }"
                    #should not print if the index is 0 or -1
                    puts "Option 2: Go West end of line N: Stops include #{ west_rev_journey.join(", ") } and return journey would include #{ west_frwd_journey * ", " } and total stops will be #{west_rev_journey.length + west_frwd_journey.size}"
                end
            
            else
                #if invalid stop
                puts "Invalid Stops"
            end
        
        end

        #For Line L
        if line == :L.to_s
            if lines[:L].include?(fir_stop) and lines[:L].include?(lst_stop)

                if (lines[:L].index(fir_stop) < lines[:L].index(lst_stop))

                    journey = lines[:L][lines[:L].index(fir_stop)..lines[:L].index(lst_stop)].join(', ')
                    no_of_stops = journey.split(', ').size

                    p "Your will be travelling from line #{ lines.keys[1] } and you have #{ no_of_stops } stops in total which includes stops #{ journey }"
                
                elsif (lines[:L].index(fir_stop) > lines[:L].index(lst_stop))
                    rev_trip = lines[:L].reverse
                    puts "-=" * 40

                   journey = rev_trip[rev_trip.index(fir_stop)..rev_trip.index(lst_stop)].join(", ")
                    no_of_stops = journey.split(', ').size
                
                    p "Your will be travelling from line #{ lines.keys[1] } and you have #{ no_of_stops } stops in total which includes stops #{ journey }"
                
                elsif (lines[:L].index(fir_stop) == lines[:L].index(lst_stop)) #should not print if the index is 0 or -1

                    rev_trip = lines[:L].reverse
                    east_frwd_journey = lines[:L].drop(lines[:L].index(fir_stop)).join(", ")
                    east_rev_journey = east_frwd_journey.split(', ').reverse.join(", ")
                    west_rev_journey = lines[:L].take(lines[:L].index(fir_stop)).reverse
                    west_frwd_journey = west_rev_journey.reverse

                    p "Your have two options,"
                    p "Option 1: Go East end of line L and your stops will be #{ east_frwd_journey} and take the returning train from there which will include stops #{ east_rev_journey} and total stops for this journey will be #{ east_frwd_journey.split(', ').size + east_rev_journey.split(', ').size }"

                    p "Option 2: Go West end of line L: Stops include #{ west_rev_journey.join(", ") } and return journey would include #{ west_frwd_journey * ", " } and total stops will be #{west_rev_journey.length + west_frwd_journey.size}"
                end
            
            else
                p "Invalid Stops"
            end
        
        end

        #For Line 6
        if line == 6.to_s
            if lines["6"].include?(fir_stop) and lines["6"].include?(lst_stop)

                if (lines["6"].index(fir_stop) < lines["6"].index(lst_stop))

                    journey = lines["6"][lines["6"].index(fir_stop)..lines["6"].index(lst_stop)].join(', ')
                    no_of_stops = journey.split(', ').size

                    p "Your will be travelling from line #{ lines.keys[2] } and you have #{ no_of_stops } stops in total which includes stops #{ journey }"
                
                elsif (lines["6"].index(fir_stop) > lines["6"].index(lst_stop))
                    rev_trip = lines["6"].reverse
                   journey = rev_trip[rev_trip.index(fir_stop)..rev_trip.index(lst_stop)].join(", ")
                    no_of_stops = journey.split(', ').size
                
                    p "Your will be travelling from line #{ lines.keys[2] } and you have #{ no_of_stops } stops in total which includes stops #{ journey }"
                
                elsif (lines["6"].index(fir_stop) == lines["6"].index(lst_stop)) #should not print if the index is 0 or -1

                    rev_trip = lines["6"].reverse
                    east_frwd_journey = lines["6"].drop(lines["6"].index(fir_stop)).join(", ")
                    east_rev_journey = east_frwd_journey.split(', ').reverse.join(", ")
                    west_rev_journey = lines["6"].take(lines["6"].index(fir_stop)).reverse
                    west_frwd_journey = west_rev_journey.reverse

                    p "Your have two options,"
                    p "Option 1: Go East end of line 6 and your stops will be #{ east_frwd_journey} and take the returning train from there which will include stops #{ east_rev_journey} and total stops for this journey will be #{ east_frwd_journey.split(', ').size + east_rev_journey.split(', ').size }"

                    p "Option 2: Go West end of line 6: Stops include #{ west_rev_journey.join(", ") } and return journey would include #{ west_frwd_journey * ", " } and total stops will be #{west_rev_journey.length + west_frwd_journey.size}"
                end
            
            else
                p "Invalid Stops"
            end
        
        end

        
    
end    


plan_trip "N", "34th", "N", "8th"
plan_trip "L", "8th", "L", "1st"  
plan_trip "6", "Grand-Central", "L", "Astor-Place"  
plan_trip "6", "Grand", "L", "Astor-Place"  
# plan_trip "N","Times-Square", "N", "34th"
# plan_trip "N","28th", "N", "8th"
# plan_trip "N","28th", "N", "28th"
# plan_trip "N","Times-Square", "N", "Times-Square"
# plan_trip "N","Union-Square", "N", "Times-Square"
# plan_trip "N","23rd", "N", "34th"






# if lines[:N].include?(fir_stop) and lines[:N].include?(lst_stop)


# lines[ :N ].each do |item|
            # p item
            # end




