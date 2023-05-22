# Glabal variable
$map = {
    "N" => [ "Times Square" , "34th", "28th", "23rd", "Union Square", "8th" ],
    "L" => [ "8th", "6th", "Union Square", "3rd", "1st" ],
    "6" => [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ]  
}
$terminal = "Union Square"

# Sub function
def get_stops this_stop, last_stop, current_line
    stops = $map[ current_line ]
    # reverse the stop list for right travel direction
    stops.reverse! if stops.index( this_stop ) > stops.index( last_stop )
    # combine required stops
    next_stops = stops[ stops.index( this_stop )+1..stops.index( last_stop ) ]  
end

 def print_info with_transit, stop_list1, line1, stop_list2 = "", line2 = ""
    total_stop = stop_list1.length
    puts "="*90
    puts "You must travel through the following stops on the #{ line1 } line: #{ stop_list1 * ", " }"  
    if with_transit
        # further instruction for trip with transit
        puts "Change at Union Square."       
        puts "Your journey continues through the following stops on the #{ line2 } line: #{stop_list2 * ", " }."
        # calculate total stops
        total_stop += stop_list2.length
    end
    # use "Stop" for only one
    return puts "#{ total_stop } stop in total." if total_stop == 1
    # use "stops" for multiple stops
    puts "#{ total_stop } stops in total."

end

# Main function
def get_direction start_line , start_stop, end_line, end_stop
    transit = false;

    # Single line trip "taken tricky input into consideration"
    if start_line == end_line || end_stop == $terminal 
        first_stop_list = get_stops start_stop, end_stop, start_line
        # print map instruction
        print_info transit, first_stop_list, start_line
        # show map
        get_map transit, start_stop, first_stop_list, start_line
    
    # Tricky input: apply terminal (Union Square) as a stop with any line as reference.
    elsif start_stop == $terminal  
        first_stop_list = get_stops start_stop, end_stop, end_line
        # print map instruction
        print_info transit, first_stop_list, end_line
        # show map
        get_map transit, start_stop, first_stop_list, start_line

    else    # Trips with transit
        transit = true;
        first_stop_list = get_stops start_stop, $terminal, start_line
        transit_stop_list = get_stops $terminal, end_stop, end_line
        # print map instruction
        print_info transit, first_stop_list, start_line, transit_stop_list, end_line
        # show map
        get_map transit, start_stop, first_stop_list, start_line, transit_stop_list, end_line
    end
end

# Additional code for visually showing the train map.
def get_map with_transit, this_stop, stop_list1, line1, stop_list2 = Array.new, line2 = "J"
    mapping = {
        "N" => { "length" => 6, "Times Square" => " ", "34th" => " ", "28th" => " ", "23rd" => " ", "Union Square" => " ", "8th" => " "},
        "L" => { "length" => 5, "8th" => " ", "6th" => " ", "Union Square" => " ", "3rd" => " ", "1st" => " "},
        "6" => { "length" => 6, "Grand Central" => " ", "33rd" => " ", "28th" => " ", "23rd" => " ", "Union Square" => " ", "Astor Place" => " "},
    }

    stop_count = 0
    stop_list1.unshift this_stop 
    i = 0
    while i < stop_list1.length
        if stop_list1[ i ] == "Union Square"
            union_square = stop_count
            stop_count += 1
        else
            mapping[ line1 ][ stop_list1[ i ] ] = stop_count
            stop_count +=1
        end
        i += 1
    end
    if with_transit
        j = 0
        while j < stop_list2.length
            mapping[ line2 ][ stop_list2[ j ] ] = stop_count
            stop_count +=1
            j += 1
        end
    end
    puts "="*120
    # graphically present the map by using each line and column as the coordinate
    puts "              Times Square      34th          28th          23rd             Astor Place
    N line -->    ( #{ mapping["N"]["Times Square"] } )---------( #{ mapping["N"]["34th"] } )---------( #{ mapping["N"]["28th"] } )---------( #{ mapping["N"]["23rd"] } )               ( #{ mapping["6"]["Astor Place"] } )    <-- 6 line
                                                                 \\             /
                                                                   \\         /
                                                                     \\     /
                                           8th           6th      Union\\ /Square     3rd           1st
                            L line -->    ( #{ mapping["L"]["8th"] } )---------( #{ mapping["L"]["6th"] } )---------( #{ union_square } )---------( #{ mapping["L"]["3rd"] } )---------( #{ mapping["L"]["1st"] } )    <-- L line
                                                                       / \\ 
                                                                     /     \\ 
                                                                   /         \\
              Grand Central      33rd          28th          23rd/             \\ 8th
    6 line -->    ( #{ mapping["6"]["Grand Central"] } )---------( #{ mapping["6"]["33rd"] } )---------( #{ mapping["6"]["28th"] } )---------( #{ mapping["6"]["23rd"] } )               ( #{ mapping["N"]["8th"] } )    <-- N line"
    puts "="*120
    puts ""
end

# Train map menu for input

def menu
    puts ""
    puts "x" * 72
    puts "Train Maps".center(70)
    puts "x" * 72
    puts "N- Times Square, 34th, 28th, 23rd, Union Square, 8th"
    puts "L- 8th, 6th, Union Square, 3rd, 1st"
    puts "6- Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place"
    puts "Journey sample menu"
    puts "=" * 19
    puts "[1] - get_direction N, Times Square, 6, 33rd"
    puts "[2] - get_direction N, Times Square, 6, Astor Place"
    puts "[3] - get_direction L, 1st, N, 34th"
    puts "[4] - get_direction L, 3rd, N, 8th"
    puts "[5] - get_direction N, Union Square, N, 34th"
    puts "[6] - get_direction N, Union Square, N, 23rd"
    puts "[7] - get_direction 6, Union Square, N, 23rd"
    puts "[8] - get_direction 6, 33rd, L, Union Square"
    puts "[9] - custom get_direction Start line, Start stop, End line, End stop"
    puts "[q] - Closing Train Maps"
    print "Select your journey type: "
end

menu
operation = gets.chomp.downcase

until operation == 'q'
    case operation
    when '1'
        get_direction "N", "Times Square", "6", "33rd"
    when '2'
        get_direction "N", "Times Square", "6", "Astor Place" 
    when '3'
        get_direction "L", "1st", "N", "34th"
    when '4'
        get_direction "L", "3rd", "N", "8th"
    when '5'
        get_direction "N", "Union Square", "N", "34th"
    when '6'
        get_direction "N", "Union Square", "N", "23rd"
    when '7'
        get_direction "6", "Union Square", "N", "23rd"
    when '8'
        get_direction "6", "33rd", "L", "Union Square"
    when '9'
        print "Enter the current train line: "
        w = gets.chomp
        print "Enter current stop: "
        x = gets.chomp
        print "Enter the train line of your final destination stop: "
        y = gets.chomp
        print "Enter your destination stop: "
        z = gets.chomp
        get_direction w, x, y, z
    else
        puts "Please enter the right trip from the selections above."
    end
    print "Check for another trip?  (yes/no) "
    if gets[ 0 ].downcase == "y"
        menu
        operation = gets.chomp.downcase
    else
        operation = 'q'
    end
end

puts "Thanks for using Train Map."