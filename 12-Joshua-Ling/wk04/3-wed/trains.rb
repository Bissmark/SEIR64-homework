subway = {
    :n_line => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :l_line => ["8th", "6th", "Union Square", "3rd", "1st"],
    :six_line => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}



def plan_trip (startLine, startStop, stopLine, stopStop, tracks) 
    start_index = tracks[startLine.to_sym].find_index(startStop) 
    start_US_index = tracks[startLine.to_sym].find_index("Union Square") 

    stop_index = tracks[stopLine.to_sym].find_index(stopStop) 
    stop_US_index = tracks[stopLine.to_sym].find_index("Union Square") 


    if startLine == stopLine 
        if start_index < stop_index
            startArr = tracks[startLine.to_sym][start_index..stop_index]
        else
            startArr = tracks[startLine.to_sym][stop_index..start_index]
        end

        puts "you must travel through the following stops on the #{startLine}:"
        startArr.each {|stop| print stop, ", "}
        puts "your number of stops is #{startArr.size - 1}"

    else
    
        if start_index < start_US_index 
            startArr = tracks[startLine.to_sym][start_index..start_US_index]
        else
            startArr = tracks[startLine.to_sym][start_US_index..start_index].reverse
        end

        if stop_index < stop_US_index 
            stopArr = tracks[stopLine.to_sym][stop_index..stop_US_index].reverse
        else
            stopArr = tracks[stopLine.to_sym][stop_US_index..stop_index]
        end

        stopArr.shift
        startArr.pop
        trip = startArr + stopArr

        puts "you must travel through the following stops on the #{startLine}:"
        startArr.each {|stop| print stop, ", "}
        puts "change at Union Square."
        puts "Your Journey continues through the #{stopLine} in the following stops: "
        stopArr.each {|stop| print stop, ", "}
        puts "your number of stops is #{startArr.size + stopArr.size}"
    end
end

plan_trip "n_line", "Times Square", "six_line", "Astor Place", subway
plan_trip "n_line", "Times Square", "six_line", "28th", subway
plan_trip "l_line", "8th", "n_line", "28th", subway
plan_trip "l_line", "3rd", "n_line", "8th", subway
plan_trip "n_line", "Times Square", "n_line", "28th", subway

# binding.irb