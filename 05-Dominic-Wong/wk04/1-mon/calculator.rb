def show_menu
    puts "-=" * 25 #Budget horizontal dividing line
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponents"
    puts "[r] - Square Roots"
    puts "[q] - Quit"
    print "Enter your choice: "
end

def add()
    print "What is the first number: "
    num1 = gets.chomp.to_i
    print "What is the second number: "
    num2 = gets.chomp.to_i
    puts "The result is #{num1 + num2}"
end

def subtract()
    print "What is the first number: "
    num1 = gets.chomp.to_i
    print "What is the second number: "
    num2 = gets.chomp.to_i
    puts "The result is #{num1 - num2}"
end

def multiply()
    print "What is the first number: "
    num1 = gets.chomp.to_i
    print "What is the second number: "
    num2 = gets.chomp.to_i
    puts "The result is #{num1 * num2}"
end

def divide()
    print "What is the first number: "
    num1 = gets.chomp.to_i
    print "What is the second number: "
    num2 = gets.chomp.to_i
    puts "The result is #{num1 / num2}"
end

def exponent()
    puts "First number is base and second number is power"
    print "What is the first number: "
    num1 = gets.chomp.to_i
    print "What is the second number: "
    num2 = gets.chomp.to_i 
    puts "The result is #{num1 ** num2}"
end

def squareroot()
    print "What number do you want to know the squareroot of: "
    num1 = gets.chomp.to_i
    puts "The result is #{Math.sqrt(num1)}"
end

# Main

puts "Calculator".center(25) #TODO: check out the .center method to make this look nicer
show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "\nYou chose addition!"
        add
    when 's'
        puts "\nYou chose subraction!"
        subtract
    when 'm'
        puts "\nYou chose multiplication!"
        multiply
    when 'd'
        puts "\nYou chose division!"
        divide
    when 'e'
        puts "\nYou chose exponents!"
        exponent
    when 'r'
        puts "\nYou chose squareroot!"
        squareroot
    else
        puts "Invalid selection. Dumbass."
    end
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"