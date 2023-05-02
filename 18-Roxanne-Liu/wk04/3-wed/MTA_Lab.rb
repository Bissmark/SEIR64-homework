def info
  menu = "Trip Planner"
  centered_menu = menu.center(90)
  puts centered_menu 
  puts "-=" * 45 

end

info

def plan_trip(start_line, start_stop, end_line, end_stop)
  
  lines = {
    "N" => [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
    "L" => [ "8th", "6th", "Union Square", "3rd", "1st" ],
    "6" => [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ]
  }

  union_square_start_index = lines[start_line].index('Union Square')
  union_square_end_index = lines[end_line].index('Union Square') 
  start_stop_index = lines[start_line].index(start_stop)
  end_stop_index = lines[end_line].index(end_stop)
  revers_start_line = lines[start_line].reverse()
  reverse_end_line = lines[end_line].reverse()
  reverse_union_square_index = reverse_end_line.index('Union Square')
  revers_star_stop_index = revers_start_line.index(start_stop)
  revers_end_stop_index = revers_start_line.index(end_stop)

  if start_line == end_line
    if start_stop_index < end_stop_index
    puts "You must travel through the following stops on the #{ start_line } line: #{ lines[start_line][(start_stop_index + 1) .. end_stop_index].join(", ") }." 
    puts "#{ lines[start_line][start_stop_index .. (end_stop_index - 1)].size } stops in total."
    else
      puts "You must travel through the following stops on the #{ start_line } line: #{ revers_start_line[(revers_star_stop_index + 1) .. revers_end_stop_index].join(", ") }." 
      puts "#{ lines[start_line][end_stop_index .. (start_stop_index - 1)].size } stops in total."
    end

  else
    if union_square_end_index < end_stop_index
      puts "You must travel through the following stops on the #{ start_line } line: #{ lines[start_line][(start_stop_index + 1) .. union_square_start_index].join(", ") }."
      puts "Change at Union Square to #{ end_line } line."
      puts "Your journey continues through the following stops on the #{ end_line } line: #{ lines[end_line][(union_square_end_index + 1) .. end_stop_index].join(", ") }."
      puts "#{ lines[start_line][start_stop_index .. (union_square_start_index - 1)].size + lines[end_line][(union_square_end_index + 1) .. end_stop_index].size } stops in total."
    else
      puts "You must travel through the following stops on the #{ start_line } line: #{ lines[start_line][(start_stop_index + 1) .. union_square_start_index].join(", ") }."
      puts "Change at Union Square to #{ end_line } line."
      puts "Your journey continues through the following stops on the #{ end_line } line: #{ reverse_end_line[(reverse_union_square_index + 1).. reverse_end_line.index(end_stop)].join(", ") }."
      puts "#{ lines[start_line][start_stop_index .. (union_square_start_index - 1)].size + reverse_end_line[(reverse_union_square_index + 1).. reverse_end_line.index(end_stop)].size } stops in total."  
    end
  end
end


plan_trip('N', 'Times Square', '6', '33rd');
plan_trip('N','34th','N','8th')
plan_trip('N', '23rd', '6', 'Astor Place')
plan_trip('6','Grand Central', 'L', '3rd')
plan_trip('N','8th','N','34th')