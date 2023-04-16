def show_menu 
    puts "Calculator".center(80)
    puts "-=" * 40
    puts "[a] - Addition"
    puts "[m] - Multiplication"
    puts "[s] - Subtraction"
    puts "[d] - Division"
    puts "[e] - Exponents"
    puts "[r] - Square Roots"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        print "Enter your starting number: "
        num_one = gets.to_f
        print "Plus: "
        num_two = gets.to_f
        def sum(a,b)
            result = a + b
            puts "Result: #{ result }"
        end
        sum num_one,num_two
       
    when 'd'
        puts "You chose division!"
        print "Enter your starting number: "
        num_one = gets.to_f
        print "Divided by: "
        num_two = gets.to_f
        def divide(a,b)
            result = a / b
            puts "Result: #{ result }"
        end
        divide num_one,num_two 

    when 'm'
        puts "You chose multiplication!"
        print "Enter your starting number: "
        num_one = gets.to_f
        print "Multiplied by: "
        num_two = gets.to_f
        def multiply(a,b)
            result = a * b
            puts "Result:#{ result }"
        end
        multiply num_one,num_two 
    
    when 's'
        puts "You chose subtraction!"
        print "Enter your starting number: "
        num_one = gets.to_f
        print "Minus: "
        num_two = gets.to_f
        def subtract(a,b)
            result = a - b
            puts "Result: #{ result }"
        end
        subtract num_one,num_two 

    when 'e'
        puts "You chose exponents!"
        print "Enter your starting number: "
        num_one = gets.to_f
        print "To the power of: "
        num_two = gets.to_f
        def exponents(a,b)
            result = a ** b
            puts "Result: #{ result }"
        end
        exponents num_one,num_two

    when 'r'
        puts "You chose square roots!"
        print "Enter your number: "
        num_one = gets.to_f
        def square_root(a)
            result = a ** 0.5
            puts "Result: #{ result }"
        end
        square_root num_one
    
    else 
        puts "Invalid selection."
    end
    
    show_menu
    menu_choice = gets.chomp.downcase

end
puts "Thanks for using this calculator"