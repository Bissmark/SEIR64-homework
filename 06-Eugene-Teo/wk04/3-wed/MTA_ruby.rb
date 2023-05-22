

def plan_trip(line1, stop1, line2, stop2)
    line_N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
    line_L = ["8th", "6th", "Union Square", "3rd", "1st"]
    line_6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

    if line1 == "N"
        first_line = line_N
    elsif line1 == "L"
        first_line = line_L
    elsif line1 == "6"
        first_line = line_6
    end                     
    
    if line1 == line2 #if travelling within same line ONLY without interchanging lines
        
        index_position_a = first_line.index(stop1) 
        index_position_b = first_line.index(stop2) 
        if index_position_a > index_position_b 
            puts "You will need to travel through #{first_line[index_position_b..index_position_a].to_a.reverse()}." #To cover instances of travelling backwards on the line (array)
        else
            puts "You will need to travel through #{first_line[index_position_a..index_position_b].to_a}."
        end

        puts "#{(index_position_a - index_position_b).abs} stops in total."

    else
        #not sure if I can make this if/elsif part DRY
        if line2 == "N"
            second_line = line_N
        elsif line2 == "L"
            second_line = line_L
        elsif line2 == "6"
            second_line = line_6
        end                             

        interchange = "Union Square"
        
        #  A > B interchange C > D 
        index_position_a = first_line.index(stop1)
        index_position_b = first_line.index(interchange)
        index_position_c = second_line.index(interchange)
        index_position_d = second_line.index(stop2)

        if index_position_a > index_position_b 
            puts "You will need to travel through #{first_line[index_position_b..index_position_a].to_a.reverse()}." #To cover instances of travelling backwards on the line (array)
        else
            puts "You will need to travel through #{first_line[index_position_a..index_position_b].to_a}."
        end

        puts "Interchange at Union Square."

        if index_position_c > index_position_d
            puts "Your journey continues through #{second_line[index_position_d..index_position_c].to_a.reverse()}." #To cover instances of travelling backwards on the line (array)
        else    
            puts "Your journey continues through #{second_line[index_position_c..index_position_d].to_a}."    
        end

        puts "#{(index_position_a - index_position_b).abs + (index_position_c - index_position_d).abs} stops in total."

    end
end


# plan_trip("N", "Times Square", "N", "8th")
plan_trip("N", "Times Square", "6", "33rd")

#Incomplete - to receive user inputs....function is working as intended though...
#Issues - To remove [] and "" from the put statement