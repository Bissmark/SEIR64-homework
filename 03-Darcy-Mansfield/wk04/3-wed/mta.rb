

def plan_trip (line_a, station_a, line_b, station_b)

    mta_lines = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    }

    station_a_index = mta_lines[line_a].index(station_a)
    line_a_mid = mta_lines[line_a].index("Union Square")
    station_b_index = mta_lines[line_b].index(station_b)
    line_b_mid = mta_lines[line_b].index("Union Square")

    # If lines are the same then no need to change at Union Square

    if line_a == line_b 

        if station_a_index < station_b_index

            station_array = mta_lines[line_a][(station_a_index + 1)..station_b_index]

            p "You must travel through the following stations on the #{line_a} line: #{station_array.join(', ')}."
            p "This will be #{station_array.length} stops."

        else

            station_array = mta_lines[line_a][station_b_index..(station_a_index - 1)].reverse

            p "You must travel through the following stations on the #{line_a} line: #{station_array.join(', ')}."
            p "This will be #{station_array.length} stops."

        end

    else

        # For trips that have to change at Union Square

        if station_a_index < line_a_mid

            line_a_array = mta_lines[line_a][(station_a_index + 1)..line_a_mid]

        else

            line_a_array = mta_lines[line_a][line_a_mid..(station_a_index - 1)].reverse

        end

        if station_b_index > line_b_mid

            line_b_array = mta_lines[line_b][(line_b_mid + 1)..station_b_index]

        else

            line_b_array = mta_lines[line_b][station_b_index..(line_b_mid - 1)].reverse

        end

        p "You must travel through the following stations on the #{line_a} line: #{line_a_array.join(', ')}."
        p "Please change at Union Square."
        p "Your journey continues on the #{line_b} line through the following stations: #{line_b_array.join(', ')}."
        p "This will be #{line_a_array.length + line_b_array.length} stops."

    end

end
 

plan_trip 'N', 'Times Square', 'N', '23rd'
plan_trip 'L', '1st', '6', 'Grand Central'


# binding.irb
