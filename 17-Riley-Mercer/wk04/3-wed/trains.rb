lineN = ["Times Square","34th", "28th", "23rd", "Union Square", "8th"]
lineL = ["8th","6th", "Union Square", "3rd", "1st"]
line6 = ["Grand Central","33rd", "28th", "23rd", "Union Square", "Astor Place"]


puts "==============================="
puts "              MTA              "
puts "==============================="

puts "Hello, which line are you currently on? (N / L / 6) "
curr_line = gets.chomp

def set_dest_line
    puts "Which line would you like to go to? (N / L / 6) "
    dest_line = gets.chomp
end

case curr_line
    when 'N'
        puts "Which stop are you currently at, along that line? #{lineN} "
        curr_stop = gets.chomp
        curr_stop_index = lineN.index(curr_stop)
        curr_us_index = lineN.index("Union Square")
        puts "You chose line N and stop index #{curr_stop_index}"
        dest_line = set_dest_line
        case dest_line
            when 'N'
                puts "Which stop would you like to go to, along that line? #{lineN} "
                dest_stop = gets.chomp
                dest_stop_index = lineN.index(dest_stop)
                dest_us_index = lineN.index("Union Square")
                puts "You chose line N and stop index #{dest_stop_index}"
            when 'L'
                puts "Which stop would you like to go to, along that line? #{lineL} "
                dest_stop = gets.chomp
                dest_stop_index = lineL.index(dest_stop)
                dest_us_index = lineL.index("Union Square")
                puts "You chose line N and stop index #{dest_stop_index}"
            when '6'
                puts "Which stop would you like to go to, along that line? #{line6} "
                dest_stop = gets.chomp
                dest_stop_index = line6.index(dest_stop)
                dest_us_index = line6.index("Union Square")
                puts "You chose line N and stop index #{dest_stop_index}"                
            else
                "Invalid Selection"
        end
    when 'L'
        puts "Which stop are you currently at, along that line? #{lineL} "
        curr_stop = gets.chomp
        curr_stop_index = lineL.index(curr_stop)
        curr_us_index = lineL.index("Union Square")
        puts "You chose line N and stop index #{curr_stop_index}"
        dest_line = set_dest_line
        case dest_line
            when 'N'
                puts "Which stop would you like to go to, along that line? #{lineN} "
                dest_stop = gets.chomp
                dest_stop_index = lineN.index(dest_stop)
                dest_us_index = lineN.index("Union Square")
                puts "You chose line N and stop index #{dest_stop_index}"
            when 'L'
                puts "Which stop would you like to go to, along that line? #{lineL} "
                dest_stop = gets.chomp
                dest_stop_index = lineL.index(dest_stop)
                dest_us_index = lineL.index("Union Square")
                puts "You chose line N and stop index #{dest_stop_index}"
            when '6'
                puts "Which stop would you like to go to, along that line? #{line6} "
                dest_stop = gets.chomp
                dest_stop_index = line6.index(dest_stop)
                dest_us_index = line6.index("Union Square")
                puts "You chose line N and stop index #{dest_stop_index}"                
            else
                "Invalid Selection"
        end
    when '6'
        puts "Which stop are you currently at, along that line? #{line6} "
        curr_stop = gets.chomp
        curr_stop_index = line6.index(curr_stop)
        curr_us_index = line6.index("Union Square")
        puts "You chose line N and stop index #{curr_stop_index}"
        dest_line = set_dest_line
        case dest_line
            when 'N'
                puts "Which stop would you like to go to, along that line? #{lineN} "
                dest_stop = gets.chomp
                dest_stop_index = lineN.index(dest_stop)
                dest_us_index = lineN.index("Union Square")
                puts "You chose line N and stop index #{dest_stop_index}"
            when 'L'
                puts "Which stop would you like to go to, along that line? #{lineL} "
                dest_stop = gets.chomp
                dest_stop_index = lineL.index(dest_stop)
                dest_us_index = lineL.index("Union Square")
                puts "You chose line N and stop index #{dest_stop_index}"
            when '6'
                puts "Which stop would you like to go to, along that line? #{line6} "
                dest_stop = gets.chomp
                dest_stop_index = line6.index(dest_stop)
                dest_us_index = line6.index("Union Square")
                puts "You chose line N and stop index #{dest_stop_index}"                
            else
                "Invalid Selection"
        end
    else 
        "Why did you not chose a line"
end

if curr_line == dest_line
    if curr_stop_index > dest_stop_index
        num_stops = curr_stop_index - dest_stop_index
        puts "There are #{num_stops} stops until your destination"        
    elsif curr_stop_index < dest_stop_index
        num_stops = dest_stop_index - curr_stop_index
        puts "There are #{num_stops} stops until your destination"
    else 
        p "You're already at this stop!"
    end 

def trip_ov
    puts "===================================="
    puts "There are #{num_stops_one + num_stops_two} stops on your journey. This is composed of #{num_stops_one} stops, then a line change at Union Square and a further #{num_stops_two} stops on your destination line." 
    puts "===================================="
end

elsif curr_line != dest_line
    if curr_stop_index > curr_us_index
        num_stops_one = curr_stop_index - curr_us_index
        if dest_stop_index > dest_us_index
            num_stops_two = dest_stop_index - dest_us_index
            num_stops_tot = num_stops_one + num_stops_two
            puts "===================================="
            puts "There are #{num_stops_one + num_stops_two} stops on your journey. This is composed of #{num_stops_one} stops, then a line change at Union Square and a further #{num_stops_two} stops on your destination line." 
            puts "===================================="
        else 
            num_stops_two = dest_us_index - dest_stop_index 
            num_stops_tot = num_stops_one + num_stops_two
            puts "===================================="
            puts "There are #{num_stops_one + num_stops_two} stops on your journey. This is composed of #{num_stops_one} stops, then a line change at Union Square and a further #{num_stops_two} stops on your destination line." 
            puts "===================================="
        end        
    elsif curr_stop_index < curr_us_index
        num_stops_one =  curr_us_index - curr_stop_index
        if dest_stop_index > dest_us_index
            num_stops_two = dest_stop_index - dest_us_index
            num_stops_tot = num_stops_one + num_stops_two
            puts "===================================="
            puts "There are #{num_stops_one + num_stops_two} stops on your journey. This is composed of #{num_stops_one} stops, then a line change at Union Square and a further #{num_stops_two} stops on your destination line." 
            puts "===================================="
        else 
            num_stops_two = dest_us_index - dest_stop_index 
            num_stops_tot = num_stops_one + num_stops_two
            puts "===================================="
            puts "There are #{num_stops_one + num_stops_two} stops on your journey. This is composed of #{num_stops_one} stops, then a line change at Union Square and a further #{num_stops_two} stops on your destination line." 
            puts "===================================="
        end        
    else 
        p "You're already at this stop!"
    end 
else
    p "I do not think this worked"    
end

