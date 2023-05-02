# # Calculator

# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu

# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)

# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)



def show_menu
    puts "Calculator".center(80) 
    puts "-=" * 40 
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponential"
    puts "[r] - Square Root"
    puts "[c] - Cube Root"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You choose addition!"         
        print "What is the first number: "
        num1 = gets.to_i
        print "What is the second number you would like to add to the first: "
        num2 = gets.to_i
        result = num1 + num2
        puts "The sum of #{num1} and #{num2} is #{ result }."
       
    when 's'
        puts "You choose subtraction!"
        print "What is the first number: "
        a = gets.to_i
        print "What is the second number you would like to subtract from the first: "
        b = gets.to_i
        result = a - b
        puts "The result of #{a} minus #{b} is #{ result }."
            
    when 'm'
        puts "You choose multiplication!"           
        print "What is the first number: "
        a = gets.to_i
        print "What is the second number you would like to multiply to the first: "
        b = gets.to_i
        result = a * b
        puts "The result of #{a} times #{b} is #{ result }."
        
    when 'd'
        puts "You choose division!"          
        print "What is the first number: "
        a = gets.to_i
        print "What is the second number you would like to divide from the first: "
        b = gets.to_i
        result = a / b
        puts "The result of #{a} divided by #{b} is #{ result }."

    when 'e'
        puts "You choose exponential!"          
        print "What is the first number: "
        a = gets.to_i
        print "What is the second number you would like to exponent from the first: "
        b = gets.to_i
        result = a ** b
        puts "The result of #{a} to the power of #{b} is #{ result }."
    
    when 'r'
        puts "You choose square root!"          
        print "What is the number to be rooted: " #english?
        a = gets.to_i
        result = Math.sqrt(a)
        puts "The square root of #{a} is #{ result }."

    when 'c'
        puts "You choose cube root!"          
        print "What is the number to be rooted: "
        a = gets.to_i
        result = Math.cbrt(a)
        puts "The cube root of #{a} is #{ result }."
        
    else 
        puts "Invalid selection. You idiot."
    end
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator."


    # # Bonus
    # ## Mortgage Calculator
    # Calculate the monthly required payment given the other variables as input (look up the necessary variables)
    
    # ## BMI Calculator
    # Calculate the body mass index (BMI) for an individual, given their height and weight
    
    # ## Trip Calculator
    # Calculate a trip time and cost given inputs for
    # - distance
    # - miles per gallon
    # - price per gallon
    # - speed in miles per hour