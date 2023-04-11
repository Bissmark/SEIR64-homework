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
    puts "Calculator".center(75) 
    puts "-=" * 40 # Budget horizontol dividing line
    puts "[a] - Addition"
    puts "[s] - Subtract"
    puts "[d] - Divide"
    puts "[m] - Multiply"
    puts "Advanced Functions"
    puts "[e] - Exponent"
    puts "[sq] - Square root"
    puts "[q] - Quit"
    print "Enter your choice: "
end
#addition function
def a(num1, num2)
    puts num1 + num2
end
#subtraction function
def s(num1, num2)
    puts num1 - num2
end
#division function
def d(num1, num2)
    puts num1 / num2
end 
#multiply function 
def m(num1, num2)
    puts num1 * num2
end 
#exponent function 
def e(num1, num2)
    puts num1 ** num2
end 
#square root function
def sq(num1)
    puts Math.sqrt(num1)
end 

show_menu

menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    # process the menu choice (do the calculation)
    case menu_choice
    when 'a'
        puts "You chose addition!"
        puts "What numbers would you like to add? "
        num1 = gets.chomp.to_i
        puts "+"
        num2 = gets.chomp.to_i
        puts "="
        a(num1, num2)
       
    when 's'
        puts "You chose subtraction!"
        puts "What numbers would you like to subtract?"
        num1 = gets.chomp.to_i
        puts "-"
        num2 = gets.chomp.to_i
        puts "="
        s(num1, num2)
        
    when 'd'
        puts "You chose division!"
        puts "What numbers would you like to divide?"
        num1 = gets.chomp.to_i
        puts "/"
        num2 = gets.chomp.to_i
        puts "="
        d(num1, num2)
    
    when 'm'
        puts "You chose multiplication!"
        puts "What numbers would you like to multiply?"
        num1 = gets.chomp.to_i
        puts "x"
        num2 = gets.chomp.to_i
        puts "="
        m(num1, num2)
    when 'e'
        puts "You chose exponent!"
        puts "What numbers would you like to exponentiate?" 
        num1 = gets.chomp.to_i
        puts "to the power of"
        num2 = gets.chomp.to_i
        puts "="
        e(num1, num2)
    when 'sq'
        puts "You chose square root!"
        puts "What number would you like the square root of?"
        num1 = gets.chomp.to_i
        puts "="
        sq(num1)
    else 
        puts "Invalid selection. Zap zeep zub zeeeeeeep."
    end 
    show_menu
    # get the next menu_choice
    menu_choice = gets.chomp.downcase
end 

puts "Thanks for using this crappy calculator"
