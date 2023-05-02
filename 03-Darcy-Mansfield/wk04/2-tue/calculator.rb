

def show_menu
    puts "Calculator"
    puts "-" * 20
    puts "[a] - Addition"
    puts "[m] - Multiply"
    puts "[d] - Divide"
    puts "[s] - Subtract"
    puts "[q] - Quit"
    puts "[ex] - Exponent"
    puts "[r] - Root"
    print "Enter your choice: "

end

show_menu

menu_choice = gets.chomp.downcase

until menu_choice == 'q'

    print "Enter the first number: "
    a = gets.to_f
    print "Enter the second number: "
    b = gets.to_f

    case menu_choice

    when 'a' 
        puts "You chose addition!"
        answer = a + b
    when 'm' 
        puts "You chose multiplication!"
        answer = a * b
    when 'd' 
        puts "You chose division!"
        answer = a / b
    when 's' 
        puts "You chose subtraction!"
        answer = a - b
    when 'q' 
        puts "You chose quit!"
    when 'ex' 
        puts "You chose exponent!"
        answer = a ** b
    when 'r' 
        puts "You chose root!"
        answer = a ** (1 / b)
    else
        print "You gave me #{menu_choice} and I don't know what to do!"
    end

    puts "The answer is #{answer}."
        
    show_menu

    menu_choice = gets.chomp.downcase

end

puts "Thanks for using this crappy calculator."