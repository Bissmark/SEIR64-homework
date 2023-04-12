def show_menu
    menu = "Calculator"
    centered_menu = menu.center(80)
    puts centered_menu # TODO: check out the .center method to make this look nicer
    puts "-=" * 40 # Budget horizontal dividing line
    puts "[a] - Addition"
    puts "[s] - Subtract"
    puts "[m] - Multiply"
    puts "[d] - Divide"
    puts "[e] - Exponent"
    puts "[r] - Square Root"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        print "Enter the first number: "
        num1 = gets.chomp.to_f
        print "Enter the second number: "
        num2 = gets.chomp.to_f
        result = num1 + num2
        puts "Result: #{result}"
    when 's'
        puts "You chose subtract!"
        print "Enter the first number: "
        num1 = gets.chomp.to_f
        print "Enter the second number: "
        num2 = gets.chomp.to_f
        result = num1 - num2
        puts "Result: #{result}"
    when 'm'
        puts "You chose multiply!"
        print "Enter the first number: "
        num1 = gets.chomp.to_f
        print "Enter the second number: "
        num2 = gets.chomp.to_f
        result = num1 * num2
        puts "Result: #{result}"
    when 'd'
        puts "You chose divide!"
        print "Enter the first number: "
        num1 = gets.chomp.to_f
        print "Enter the second number: "
        num2 = gets.chomp.to_f
            if num2 == 0
                puts "Wrong! Cannot divide by zero"
            else
                result = num1 / num2
                puts "Result: #{result}"
            end
    when 'e'
        puts "You chose exponent!"
        print "Enter the first number: "
        num1 = gets.chomp.to_f
        print "Enter the second number: "
        num2 = gets.chomp.to_f
        result = num1 ** num2
        puts "Result: #{result}"
    when 'r'
        puts "You chose square root!"
        print "Enter the number: "
        num1 = gets.chomp.to_f
            if num1 < 0
                puts "Wrong! Cannot take square root of a negative number"
            else
                result = Math.sqrt(num1)
                puts "Result: #{result}"
            end
    else
        puts "Invalid selection. You idiot."
    end
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"