def show_menu
    puts "Calculator"
    puts "-=" * 40
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[d] - Division"
    puts "[m] - Multiplication"
    puts "[e] - Exponents"
    puts "[b] - BMI Calculator"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition"
        print "First number: "
        x = gets.to_f
        print "Second number: "
        y = gets.to_f
        def add(a,b)
            result = a+b
            result
        end
        puts "The result is #{add x, y}"
    when 's'
        puts "You chose subtraction"
        print "First number: "
        x = gets.to_f
        print "Second number: "
        y = gets.to_f
        def sub(a,b)
            result = a - b
            result
        end
        puts "The result is #{sub x, y}"
    when 'd'
        puts "You chose division"
        print "First number: "
        x = gets.to_f
        print "Second number: "
        y = gets.to_f
        def div(a,b)
            result = a / b
            result
        end
        puts "The result is #{div x, y}"
    when 'm'
        puts "You chose multiplication"
        print "First number: "
        x = gets.to_f
        print "Second number: "
        y = gets.to_f
        def mult(a,b)
            result = a * b
            result
        end
        puts "The result is #{mult x, y}"
    when 'e'
        puts "You chose exponents"
        print "First number: "
        x = gets.to_f
        print "To the power of: "
        y = gets.to_f
        def exp(a,b)
            result = a ** b
            result
        end
        puts "The result is #{exp x, y}"
    when 'b'
        puts "You chose BMI Calculator"
        print "Your weight in kg: "
        x = gets.to_f
        print "Your height in meters: "
        y = gets.to_f
        def bmi(a,b)
            result = a/(b*b)
            result
        end
        puts "The result is #{bmi x, y}"
    else
        puts "Invalid"
    end 
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using"