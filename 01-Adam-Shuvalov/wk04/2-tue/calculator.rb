def show_menu
    puts "Calculator!"
    puts "-=" * 40
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "-=" * 20
    puts "[r] - Remainder"
    puts "[p] - Power of"
    puts "[sr] - Square root"
    puts "-=" * 20
    puts "[mo] - Mortgage"
    puts "[BMI] - BMI"
    puts "[tc] - Trip Calculator"
    puts "[q] - Quit"
    print "Your choice: "

end

show_menu

menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition, please select 2 numbers to add: "
        number_input1 = gets.to_f
        number_input2 = gets.to_f
        puts number_input1 + number_input2
    when 's'
        puts "You chose addition, please select 2 numbers to minus: "
        number_input1 = gets.to_f
        number_input2 = gets.to_f
        puts number_input1 - number_input2
    when 'm'
        puts "You chose multiplication, please select 2 numbers to multiply: "
        number_input1 = gets.to_f
        number_input2 = gets.to_f
        puts number_input1 * number_input2
    when 'd'
        puts "You chose division, please select 2 numbers to divide: "
        number_input1 = gets.to_f
        number_input2 = gets.to_f
        puts number_input1 / number_input2
    when 'r'
        puts "You chose remainder, please select 2 numbers to divide: "
        number_input1 = gets.to_f
        number_input2 = gets.to_f
        puts number_input1 % number_input2
    when 'p'
        puts "You chose power to, please select a number and how much to power it by: "
        number_input1 = gets.to_f
        number_input2 = gets.to_f
        puts number_input1 ** number_input2
    when 'sr'
        puts "You chose square root, please select 1 number to find the square root of: "
        number_input1 = gets.to_f
        puts Math.sqrt(number_input1)
    when 'mo'
        puts "You chose Mortage Monthly Repayment, please enter:"
        print "The total amount of your loan: "
        p = gets.to_f
        print "Your interest rate, as a monthly percentage: "
        i = gets.to_f
        print "The total amount of months in your timeline for paying off your mortgage: "
        n = gets.to_f
        m = (p * (i * (1+i)**n)) / ((1+i)**n -1) # THIS FORMULAS IS WRONG?
        puts "Your mortgage monthly repayment is #{m}"
    when 'bmi'
        puts "You chose BMI, please enter:"
        puts "Your weight in kilograms: "
        weight = gets.to_f
        puts "Your height in metres: "
        height = gets.to_f
        puts "Your BMI is #{weight / (height * height)}"
    when 'tc'
        puts "You chose Trip Calculator, please enter:"
        puts "Distance in kilometres: "
        distance = gets.to_f
        puts "Kilometres per litre: "
        kilometres_per_litre = gets.to_f
        puts "Price per litre: "
        price_per_litre = gets.to_f
        puts "Speed in kilometres: "
        speed = gets.to_f
        trip_cost = (distance / kilometres_per_litre) * price_per_litre
        trip_time = distance / speed
        puts "Your trip will cost $#{trip_cost} and take #{trip_time} hours"
    else 
        puts 'INCORRECT INPUT'
    end
    show_menu
    menu_choice = gets.chomp.downcase
end