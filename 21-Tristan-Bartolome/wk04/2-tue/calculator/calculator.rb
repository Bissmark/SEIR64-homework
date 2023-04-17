def show_menu
    puts "Calculator" #TODO: check out the .center method to make this look nicer
    puts "-=" * 40 # Budget horizontal dividing line
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[r] - Square Root"
    puts "[e] - Exponents"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

def sum (a, b)
    result = a + b
    puts "The result is #{result}"

end

def subtract (a, b)
    result = a - b
    puts "The result is #{result}"
end

def multiply (a, b)
    result = a * b
    puts "The result is #{result}"
end

def divide (a, b)
    result = a / b
    puts "The result is #{result}"
end

def exponents(a, b)
    result = a ** b
    puts "The result is #{result}"
end

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition! What two numbers would you like to add: "
        num1 = gets.chomp.to_i        
        num2 = gets.chomp.to_i
        
        sum(num1, num2)    

    when 's'
        puts "You chose subtraction! What two numbers would you like to subtract: " 
        num1 = gets.chomp.to_i
        num2 = gets.chomp.to_i
        
        subtract(num1, num2)

    when 'm'
        puts "You chose muiltiplication! What two numbers would you like to multiply: "
        num1 = gets.chomp.to_i
        num2 = gets.chomp.to_i
        
        multiply(num1, num2)

    when 'd'
        puts "You chose division! What two numbers would you like to divide: "
        num1 = gets.chomp.to_i
        num2 = gets.chomp.to_i
        
        divide(num1, num2)

    when 'r'
        puts "You chose square root! What number would you like to find the square root of: "
        num = gets.chomp.to_f

        squareRoot = Math.sqrt(num)

        puts "The Square Root is: #{squareRoot}"

    when 'e'
        puts "You chose exponents! What number would you like to raise to the power of: "
        num1 = gets.chomp.to_i
        num2 = gets.chomp.to_i

        exponents(num1, num2)

    else
        puts "Invalid selection. You idiot."
    end    
    show_menu
    menu_choice = gets.chomp.downcase
end


puts "Thanks for using this crappy calculator"


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
# Bonus
# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

# Trip Calculator
# Calculate a trip time and cost given inputs for

# distance
# miles per gallon
# price per gallon
# speed in miles per hour