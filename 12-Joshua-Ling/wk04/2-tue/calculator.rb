def calc(operation="")
    if operation == ""
        
        return puts "pick a valid choice"
    end    
    print "first Number: "
    num1 = gets.to_f

    unless operation == "r"
        print "second Number: "
        num2 = gets.to_f
    end

    case operation
    when "a"
        puts "#{num1} + #{num2} = #{num1 + num2}"
    when "s"
        puts "#{num1} - #{num2} = #{num1 - num2}"
    when "m"
        puts "#{num1} * #{num2} = #{num1 * num2}"
    when "d"
        puts "#{num1} / #{num2} = #{num1 / num2}"
    when "p"
        puts "#{num1} ^ #{num2} = #{num1 ** num2}"
    when "r"
        puts "Square root of #{num1} is #{Math.sqrt(num1)}"
    else
        puts "Pick a valid choice"
    end
end

def show_menu
    puts "Calculator"
    puts "/\\" * 17
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[P] - POWER"
    puts "[r] - Square Root"
    puts "[q] -Quit"
    print "Enter your Choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
    case menu_choice
    when "a"
        calc "a"
    when "s"
        calc "s"
    when "m"
        calc "m"
    when "d"
        calc "d"
    when "p"
        calc "p"
    when "r"
        calc "r"
    else
        calc
    end
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using me"
puts "\\/" * 17


