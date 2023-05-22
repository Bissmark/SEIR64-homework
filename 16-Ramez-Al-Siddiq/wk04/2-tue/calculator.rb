# Exercise: https://gist.github.com/wofockham/2752aa06121df7f3024c

# A menu displaying options for the user to select
def show_menu
    puts "Calculator"
    puts "-=" * 40 # Budget horizontal diving line
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponent"
    puts "[r] - Square Root"
    puts "[q] - Quit"
    print "Enter your choice: "
end

# Created an addition method which adds the sum of two numbers and allows for the user to input
def addition
    print "Enter the first number: "
    num1 = gets.chomp.to_f
    print "Enter the second number: "
    num2 = gets.chomp.to_f
    num1 + num2
end

# Created a subtraction method which subtracts two numbers designated by the user
def subtraction
    print "Enter the first number: "
    num1 = gets.chomp.to_f
    print "Enter the second number: "
    num2 = gets.chomp.to_f
    num1 - num2
end

# Created a multiplication method which multiplies two numbers designated by the user
def multiplication
    print "Enter the first number: "
    num1 = gets.chomp.to_f
    print "Enter the second number: "
    num2 = gets.chomp.to_f
    num1 * num2
end

# Created a division method which divides two numbers designated by the user
def division
    print "Enter the first number: "
    num1 = gets.chomp.to_f
    print "Enter the second number: "
    num2 = gets.chomp.to_f
    num1 / num2
end

# Created a exponent method which adds a number to the power of another number
def exponent
    print "Enter the first number: "
    num1 = gets.chomp.to_f
    print "Enter the second number: "
    num2 = gets.chomp.to_f
    num1 ** num2
end

# Created a square root method which finds the square root of a number
def square_root
    print "Enter the first number: "
    num1 = gets.chomp.to_f
    print "Enter the second number: "
    num2 = gets.chomp.to_f
    Math.sqrt(num1)
end

# Display the options to the user as would a calculator once it turns on
show_menu
menu_choice = gets.chomp.downcase

# Until user selects quit, allow the following methods to run
until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        result = addition
        puts "Result: #{result}"
    when 's'
        puts "You chose subtraction"
        result = subtraction
        puts "Result: #{result}"
    when 'm'
        puts "You chose multiplication"
        result = multiplication
        puts "Result: #{result}"
    when 'd'
        puts "You chose division"
        result = division
        puts "Result: #{result}"
    when 'e'
        puts "You chose exponent"
        result = exponent
        puts "Result: #{result}"
    when 'r'
        puts "You chose square_root"
        result = square_root
        puts "Result: #{result}"
    else
        puts "Invalid selection."
    end
    show_menu
    menu_choice = gets.chomp.downcase
end

# Outputs this message once the user clicks quit
puts "Thanks for using this calculator"
