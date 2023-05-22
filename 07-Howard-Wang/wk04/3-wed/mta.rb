def plan_trip(start_line, start_stop, end_line, end_stop)
    lines = {
    "N" => ["Times Square", "34th", "28thN", "23rdN", "Union Square", "8thN"],
    "L" => ["1st","3rd", "Union Square", "6th", "8thL"],
    "6" => ["Astor Place", "Union Square", "23rd6", "28th6", "33rd", "Grand Central"]
}
    if start_line == end_line && lines[start_line].index(start_stop).to_i < lines[end_line].index(end_stop).to_i
        start = "#{lines[start_line].index(start_stop)}"
        finish = "#{lines[end_line].index(end_stop)}"
        puts ("Travel the following stops on Line#{start_line}: #{lines[end_line][(start.to_i) +1 .. (finish.to_i)].join(', ')}")
        puts ("#{lines[end_line][(start.to_i) +1 .. (finish.to_i)].size} stops in total")
    elsif start_line == end_line && lines[start_line].index(start_stop).to_i > lines[end_line].index(end_stop).to_i
        start = "#{lines[start_line].reverse.index(start_stop)}"
        finish = "#{lines[end_line].reverse.index(end_stop)}"
        puts ("Travel the following stops on Line#{start_line}: #{lines[end_line].reverse[(start.to_i) +1 .. (finish.to_i)].join(', ')}")  
        puts ("#{lines[end_line].reverse[(start.to_i) +1 .. (finish.to_i)].size} stops in total")  
    end

    if start_line != end_line && lines[start_line].index(start_stop).to_i < lines[start_line].index("Union Square").to_i && lines[end_line].index("Union Square").to_i < lines[end_line].index(end_stop).to_i
        start = "#{lines[start_line].index(start_stop)}"
        change_at1 = "#{lines[start_line].index("Union Square")}"
        puts ("Travel the following stops on Line#{start_line}: #{lines[start_line][(start.to_i) +1 .. (change_at1.to_i)].join(', ')}")
        puts ("Change at Union Square")
        finish = "#{lines[end_line].index(end_stop)}"
        change_at2 = "#{lines[end_line].index("Union Square")}"
        puts ("Your journey continues through the following stops: #{lines[end_line][(change_at2.to_i) +1 .. (finish.to_i)].join(', ')}")
        total = lines[start_line][(start.to_i) +1 .. (change_at1.to_i)].size + lines[end_line][(change_at2.to_i) +1 .. (finish.to_i)].size
        puts ("#{total} stops in total.")
        end

    if start_line != end_line && lines[start_line].index(start_stop).to_i > lines[start_line].index("Union Square").to_i && lines[end_line].index("Union Square").to_i < lines[end_line].index(end_stop).to_i
        start = "#{lines[start_line].reverse.index(start_stop)}"
        change_at1 = "#{lines[start_line].reverse.index("Union Square")}"
        puts ("Travel the following stops on Line#{start_line}: #{lines[start_line].reverse[(start.to_i) +1 .. (change_at1.to_i)].join(', ')}")
        puts ("Change at Union Square")
        finish = "#{lines[end_line].index(end_stop)}"
        change_at2 = "#{lines[end_line].index("Union Square")}"
        puts ("Your journey continues through the following stops: #{lines[end_line][(change_at2.to_i) +1 .. (finish.to_i)].join(', ')}")
        total = lines[start_line].reverse[(start.to_i) +1 .. (change_at1.to_i)].size + lines[end_line][(change_at2.to_i) +1 .. (finish.to_i)].size
        puts ("#{total} stops in total.")
        end

    if start_line != end_line && lines[start_line].index(start_stop).to_i < lines[start_line].index("Union Square").to_i && lines[end_line].index("Union Square").to_i > lines[end_line].index(end_stop).to_i
        start = "#{lines[start_line].index(start_stop)}"
        change_at1 = "#{lines[start_line].index("Union Square")}"
        puts ("Travel the following stops on Line#{start_line}: #{lines[start_line][(start.to_i) +1 .. (change_at1.to_i)].join(', ')}")
        puts ("Change at Union Square")
        finish = "#{lines[end_line].reverse.index(end_stop)}"
        change_at2 = "#{lines[end_line].reverse.index("Union Square")}"
        puts ("Your journey continues through the following stops: #{lines[end_line].reverse[(change_at2.to_i) +1 .. (finish.to_i).join(', ')]}")
        total = lines[start_line][(start.to_i) +1 .. (change_at1.to_i)].size + lines[end_line].reverse[(change_at2.to_i) +1 .. (finish.to_i)].size
        puts ("#{total} stops in total.")
        end  
        
    if start_line != end_line && lines[start_line].index(start_stop).to_i > lines[start_line].index("Union Square").to_i && lines[end_line].index("Union Square").to_i > lines[end_line].index(end_stop).to_i
        start = "#{lines[start_line].reverse.index(start_stop)}"
        change_at1 = "#{lines[start_line].reverse.index("Union Square")}"
        puts ("Travel the following stops on Line#{start_line}: #{lines[start_line].reverse[(start.to_i) +1 .. (change_at1.to_i)].join(', ')}")
        puts ("Change at Union Square")
        finish = "#{lines[end_line].reverse.index(end_stop)}"
        change_at2 = "#{lines[end_line].reverse.index("Union Square")}"
        puts ("Your journey continues through the following stops: #{lines[end_line].reverse[(change_at2.to_i) +1 .. (finish.to_i)].join(', ')}")
        total = lines[start_line].reverse[(start.to_i) +1 .. (change_at1.to_i)].size + lines[end_line].reverse[(change_at2.to_i) +1 .. (finish.to_i)].size
        puts ("#{total} stops in total.")
        end
end

plan_trip "N", "8thN", "N", "34th"