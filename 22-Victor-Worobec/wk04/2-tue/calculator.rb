TITLE_LENGTH = 30

def show_menu
    print "\n"
    puts "=" * TITLE_LENGTH
    puts "Calculator" # TODO: check out the .center method to make this look nice
    puts "=" * TITLE_LENGTH
    puts "\n[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[r] - Square Root"
    puts "[e] - Exponent"
    puts "\n[q] - Quit"
    puts "\nEnter your choice: "
end

def show_add
    print "\n"
    puts "-" * TITLE_LENGTH
    puts "Addition"
    puts "-" * TITLE_LENGTH

    print "Type first value to be added: "
    num1 = gets.to_f
    print "Type second value to be added: "
    num2 = gets.to_f
    puts "#{ num1 } + #{ num2 } = #{ num1 + num2 }"
end

def show_subtract
    print "\n"
    puts "-" * TITLE_LENGTH
    puts "Subtraction"
    puts "-" * TITLE_LENGTH

    print "Type starting value: "
    num1 = gets.to_f
    print "Type value to be subtracted: "
    num2 = gets.to_f
    puts "#{ num1 } - #{ num2 } = #{ num1 - num2 }"
end

def show_multiply
    print "\n"
    puts "-" * TITLE_LENGTH
    puts "Multiplication"
    puts "-" * TITLE_LENGTH

    print "Type value to be multiplied: "
    num1 = gets.to_f
    print "Type multplying value: "
    num2 = gets.to_f
    puts "#{ num1 } * #{ num2 } = #{ num1 * num2 }"
end

def show_divide
    print "\n"
    puts "-" * TITLE_LENGTH
    puts "Division"
    puts "-" * TITLE_LENGTH

    print "Type value to be divided: "
    num1 = gets.to_f
    print "Type value to divide by: "
    num2 = gets.to_f
    puts "#{ num1 } / #{ num2 } = #{ num1 / num2 }"
end

def show_square_root
    print "\n"
    puts "-" * TITLE_LENGTH
    puts "Square Root"
    puts "-" * TITLE_LENGTH

    print "Type value to find the square root of: "
    num = gets.to_f
    puts "The square root of #{ num } is #{ Math.sqrt(num) }."
end

def show_exponent
    print "\n"
    puts "-" * TITLE_LENGTH
    puts "Exponential"
    puts "-" * TITLE_LENGTH

    print "Type starting value: "
    num1 = gets.to_f
    print "Type exponent value: "
    num2 = gets.to_f
    puts "#{ num1 } to the power of #{ num2 } is #{ num1 ** num2}"
end

# Calculator

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'

    case menu_choice
    when 'a'
        show_add
    when 's'
        show_subtract
    when 'm'
        show_multiply
    when 'd'
        show_divide
    when 'r'
        show_square_root
    when 'e' 
        show_exponent
    else
        puts "\nInvalid selection."
    end

    show_menu

    # get the next menu_choice
    menu_choice = gets.chomp.downcase

end

puts "\nThank you for using this toaster."

# Calculator
# Explanation
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)