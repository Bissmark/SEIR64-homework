# You will be building a calculator. 
# A calculator can perform multiple arithmetic operations. 
# Your function should allow the user to choose which operation is expected, 
# enter in the values to perform the operation on, and ultimately view the result
#A user should be given a menu of operations
#A user should be able to choose from the menu
#A user should be able to enter numbers to perform the operation on
#A user should be shown the result
#This process should continue until the user selects a quit option from the menu
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
def show_menu
    puts "calculator" #TODO check out the center methods
    puts "-=" * 40
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - exponents"
    puts "[sq]- square"
    puts "[q] - Quit"
end

def add(a,b) 
    a + b  
end

def subtract(a,b)
    a - b
end

def multiply(a,b)
    a * b
end

def division(a,b)
    a / b
end
def exponents(a,b)
    a ** b
end
def square (a, b)
    a * b
end
def user_chooses_operation
    print "Enter your operation choice: "
    gets.chomp.downcase
end

show_menu
menu_choice = user_chooses_operation


until menu_choice == "q"
#proces the menu choice(do the calculation)

    print "choose the first number: "
    a = gets.to_i
    print "choose the second number: "
    b = gets.to_i

    case menu_choice
        when "a"
            puts "you chose addition!"
            puts "the result is: #{add(a,b)}"
            
        when "s"
            puts "you chose subtraction"
            # subtract(a, b)
            puts "the result is #{subtract(a,b)}"
            
        
        when "m"
            puts "you chose multiplication"
            puts "the result is #{multiply(a,b)}"

            
        when"d"
            puts "you chose division"
            puts "the result is #{division(a,b)}"
        
        when "e"
            puts "your chose exponents"
            puts "the result is #{exponents(a,b)}"

        when "sq"
            puts "you chose square"
            puts "the result is #{square(a,b)}"
        else
            puts "invalid Selection"
            
    end
    show_menu
    menu_choice=gets.chomp.downcase
end

# puts "thank you for using this calculator"
