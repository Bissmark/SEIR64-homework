lines = {
"N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
"L" => ["8th", "6th", "Union Square", "3rd", "1st"],
"6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

def plan_trip(start_line, start_station, end_line, end_station)
start_index = lines[start_line].index(start_station)
end_index = lines[end_line].index(end_station)

if start_line == end_line
if start_index < end_index

    
puts "You must travel through the following stops on the #{start_line} line: #{stops.join(", ")}."
else

end
end

# Not sure how to get this operating at all. 
# This hurt my brain
# irb and ruby subway.rb had no response. 