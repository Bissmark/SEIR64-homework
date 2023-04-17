def plan_trip(start_line, start_station, end_line, end_station)
    subway = {
      "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
      "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
      "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    }
  
    start_index = subway[start_line].index(start_station)
    end_index = subway[end_line].index(end_station)
    intersection_index_start = subway[start_line].index("Union Square")
    intersection_index_end = subway[end_line].index("Union Square")
  
    if start_line == end_line
      if start_index < end_index
        stops = subway[start_line][start_index..end_index]
        puts "You must travel through the following stops on the #{start_line} line: #{stops.join(', ')}."
        puts "#{stops.length - 1} stops in total."
      else
        stops = subway[start_line][end_index..start_index].reverse
        puts "You must travel through the following stops on the #{start_line} line: #{stops.join(', ')}."
        puts "#{stops.length - 1} stops in total."
      end
    else
      if start_index < intersection_index_start
        stops_start = subway[start_line][start_index..intersection_index_start]
      else
        stops_start = subway[start_line][intersection_index_start..start_index].reverse
      end
  
      if end_index < intersection_index_end
        stops_end = subway[end_line][end_index..intersection_index_end].reverse
      else
        stops_end = subway[end_line][intersection_index_end..end_index]
      end
  
      puts "You must travel through the following stops on the #{start_line} line: #{stops_start.join(', ')}."
      puts "Change at Union Square."
      puts "Your journey continues through the following stops on the #{end_line} line: #{stops_end.join(', ')}."
      puts "#{stops_start.length - 1 + stops_end.length - 1} stops in total."
    end
  end
  
  plan_trip('N', 'Times Square', '6', '33rd')
