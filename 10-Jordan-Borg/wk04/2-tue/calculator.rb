def show_menu
    puts "Calculator"
    puts "-=" * 40 # Budget horizontal dividing line
    puts "[a] - Addition"
    #TODO: add other operations here (multiply, divide, subtract)
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        puts "actual addition coming soon"
        # TODO: Actually do the actual addition
        # TODO: add more when clauses for subtraction, multiplication, etc
    else
        puts "Invalid selection. You idiot."
    end
    # show the menu
    show_menu
    # get the next menu_choice
    menu_choice = gets.chomp.downcase
end

def calculator
    loop do
    puts "Please enter the number of the operation you'd like to perform:"
    puts "1. Add"
    puts "2. Subtract"
    puts "3. Multiply"
    puts "4. Divide"
    puts "5. Exponents"
    puts "6. Square root"
    puts "7. Quit"
# process the menu choice (do the calculation)

    def add
        puts "Enter the first number:"
        num1 = gets.chomp.to_f
        puts "Enter the second number:"
        num2 = gets.chomp.to_f
        result = num1 + num2
        puts "The result is #{result}"
        end

    def subtract
        puts "Enter the first number:"
        num1 = gets.chomp.to_f
        puts "Enter the second number:"
        num2 = gets.chomp.to_f
        result = num1 - num2
        puts "The result is #{result}"
        end
    
    def multiply
        puts "Enter the first number:"
        num1 = gets.chomp.to_f
        puts "Enter the second number:"
        num2 = gets.chomp.to_f
        result = num1 * num2
        puts "The result is #{result}"
        end

    def divide
        puts "Enter the first number:"
        num1 = gets.chomp.to_f
        puts "Enter the second number:"
        num2 = gets.chomp.to_f
        result = num1 / num2
        puts "The result is #{result}"
        end

    def exponent
        puts "Enter the base number:"
        base = gets.chomp.to_f
        puts "Enter the exponent number:"
        exp = gets.chomp.to_f
        result = base ** exp
        puts "The result is #{result}"
        end

    def square_root
        puts "Enter the number to find the square root of:"
        num = gets.chomp.to_f
        result = Math.sqrt(num)
        puts "The result is #{result}"
        end

    end 

puts "Thanks for using this crappy calculator"

end