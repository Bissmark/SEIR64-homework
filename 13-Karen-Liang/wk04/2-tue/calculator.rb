def show_menu
    puts "Calculator".center(80) 
    puts "-=" * 40 # Budget horizontal dividing line
    puts "[a] - Addition" 
    puts "[s] - Subtraction" 
    puts "[m] - Multiplication" 
    puts "[d] - Division" 
    puts "[e] - Exponentiation" 
    puts "[sr] - Square Root" 

    # TODO: add other operations here m - multiple, d - divide, s - subtract
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    # process the menu choice (do the calculation)
    case menu_choice

    when "a" # ADDITION
        puts "You chose Addition!"

        print "Input all the numbers (no commas, use spaces): "
        # get all the values -> .to_i will only select the first number
        number_a = gets.chomp

        # # CHECK IF IT IS A STRING -> RETURNING TRUE 
        # if number_a.is_a?(String)
        #     puts "true"
        # else
        #     puts "false"
        # end

        # split using spaces to create an array of numbers
        # map &: to_i to go through all elements and convert into numbers
        numbers = number_a.split(" ").map(&:to_f) # to_f to ensure decimal numbers are included instead of rounding up

        # sum of array :+ method is same as inject.
        sum = numbers.reduce(:+)
    
        puts "The answer is #{ sum }"

    when "s" # SUBTRACTION
        puts "You chose Subtraction!"
         
        print "Input all the numbers (no commas, use spaces): "

        number_a = gets.chomp

        numbers = number_a.split(" ").map(&:to_f)

        # subtract of array :- method is same as inject.
        subtraction = numbers.reduce(:-)

        puts "The answer is #{ subtraction }"
    
    when "m" # MULTIPLICATION
        puts "You chose Multiplication!"
        
        print "Input all the numbers (no commas, use spaces): "
        number_a = gets.chomp

        numbers = number_a.split(" ").map(&:to_f)

        # multiplation of array :* 
        multiply = numbers.reduce(:*)

        puts "The answer is #{ multiply }"
    
    when "d" # DIVISION
        puts "You chose Division!"
        
        print "Input all the numbers (no commas, use spaces): "
        number_a = gets.chomp

        numbers = number_a.split(" ").map(&:to_f)

        # mdivision of array :/
        division = numbers.reduce(:/)

        puts "The answer is #{ division }"

    when "e" # EXPONENTS
        puts "You chose Exponentiation!"
        
        print "Input all the numbers (no commas, use spaces): "
        number_a = gets.chomp

        numbers = number_a.split(" ").map(&:to_f)

        # exponent of array :**
        exponent = numbers.reduce(:**)

        puts "The answer is #{ exponent }"

    when "sr" # SQUARE ROOT
        puts "You chose Square Root!"

        print print "Input the number:  "    
        number_a = gets.to_f
        
        puts "The answer is #{ Math.sqrt(number_a)}"
        
    else
        puts "Invalid selection. You idiot"
    
    end
    # show the menu
    show_menu
    # get the next menu_chic
    menu_choice = gets.chomp.downcase

end

puts "Thanks for using this calculator"

