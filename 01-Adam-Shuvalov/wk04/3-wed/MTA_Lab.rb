subway_lines = {
    "N line" => ["Times Square", "34th", "28th-N", "23rd-N", "Union Square", "8th-N"],
    "L line" => ["8th-L", "6th", "Union Square", "3rd", "1st"],
    "6 line" => ["Grand Central", "33rd", "28th-6", "23rd-6", "Union Square", "Astor Place"]
} 

puts "Please enter origin line: "
origin_line = gets.chomp
puts "Please enter origin station: "
origin_station = gets.chomp

puts "Please enter destination line: "
destination_line = gets.chomp
puts "Please enter destination station: "
destination_station = gets.chomp

origin_index = subway_lines[origin_line].index(origin_station)
destination_index = subway_lines[destination_line].index(destination_station)
line1_string = "Take the following route on the #{origin_line}: "
line2_string = "Take the following route on the #{destination_line}: "
stops_array1 = []
stops_array2 = []
stops = 0

unless origin_line == destination_line
    common_station = (subway_lines[origin_line] & subway_lines[destination_line]).join() 
    line1_common_index = subway_lines[origin_line].index(common_station)
    line2_common_index = subway_lines[destination_line].index(common_station)

    if line1_common_index > origin_index
        i = origin_index
        until i == line1_common_index + 1
            stops_array1 = stops_array1.push(subway_lines[origin_line][i])
            i += 1
            stops += 1
        end
    else
        i = origin_index
        until i == line1_common_index - 1
            stops_array1 = stops_array1.push(subway_lines[origin_line][i])
            i -= 1
            stops += 1
        end
    end

    if destination_index > line2_common_index
        i = line2_common_index + 1
        until i == destination_index + 1
            stops_array2 = stops_array2.push(subway_lines[destination_line][i])
            i += 1
            stops += 1
        end
    else
        i = line2_common_index - 1
        until i == destination_index - 1
            stops_array2 = stops_array2.push(subway_lines[destination_line][i])
            i -= 1
            stops += 1
        end
    end

p line1_string += stops_array1.join(", ")
p "Change at #{common_station}"
p line2_string += stops_array2.join(", ")

else
    if destination_index > origin_index 
        i = origin_index
        until i == destination_index + 1
            stops_array1 = stops_array1.push(subway_lines[origin_line][i])
            i +=1
            stops += 1
        end
    else
        i = origin_index
        until i == destination_index - 1
            stops_array1 = stops_array1.push(subway_lines[origin_line][i])
            i -=1
            stops += 1
        end
    end
    p line1_string += stops_array1.join(", ")
end

p "Total stops: #{stops}"