def show_menu
    puts "Calculator" # make center
    puts "-=" * 40
    puts "[a] - addition"
    puts "[s] - subtraction"
    puts "[m] - multiplication"
    puts "[d] - division"
    puts "[^] - exponents"
    puts "[/^] - square root"
    # Add operations (multiply, divide, subtract)
    puts "[q] - quit"
    print "Enter your choice: "
end

# add functions for all calculations to put in until loop

def addition(a, b)
    puts "your answer is #{ a + b }"
end

def subtraction(a, b)
    puts "your answer is #{ a - b }"
end

def multiplication(a, b)
    puts "your answer is #{ a * b }"
end

def division(a, b)
    puts "your answer is #{ a / b }"
end

def exponents(a, b)
    puts "your answer is #{ a**b }"
end

def square_roots(a)
    puts "your answer is #{ Math.sqrt(a) }"
end


show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition"
        puts "Provide two numbers to add to each other"
        num_one = gets.to_i
        num_two = gets.to_i
        addition(num_one, num_two)
    when 's'
        puts "You chose subtraction"
        puts "Provide two numbers to subtract the second from the first"
        num_one = gets.to_i
        num_two = gets.to_i
        subtraction(num_one, num_two)
    when 'm'
        puts "You chose multiplication"
        puts "Provide two numbers to multiply with each other"
        num_one = gets.to_i
        num_two = gets.to_i
        multiplication(num_one, num_two)
    when 'd'
        puts "You chose division"
        puts "Provide two numbers to divide the second from the first"
        num_one = gets.to_i
        num_two = gets.to_i
        division(num_one, num_two)
    when '^'
        puts "You chose exponents"
        puts "Provide the first number and then the value of how many times it will be squared"
        num_one = gets.to_i
        num_two = gets.to_i
        exponents(num_one, num_two)
    when '/^'
        puts "You chose square root"
        puts "Provide one number which will return the square root of the number"
        num_one = gets.to_i
        square_roots(num_one)
    else
        puts "Invalid selection dumbass"
    end
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for supporting my trash calculator"