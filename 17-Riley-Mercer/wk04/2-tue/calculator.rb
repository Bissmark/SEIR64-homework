puts "-=" * 60
puts "Calculator"                                                  #To do: check out Centre method? 
puts "-=" * 60                                                     # budget dividing line...

puts "Please choose a starting value. For BMI calculations this is your height in cms, for mortage repayments this is outstanding loan amount."

init_value = gets.chomp
init_value = init_value.to_i

def show_menu
    puts "Now please chose an operation to apply to be applied:"
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponent"
    puts "[sq] - Square Root"
    puts "[bmi] - BMI Calculator"
    puts "[mort] - Mortage Repayment Calculator"
    puts "----------------------"
    puts "[r] - Reset Calculator Memory"
    puts "[q] - Quit!"
    puts "----------------------"
end

def int_entry
    puts "----------------------"
    puts "Thank you, and now the other number which name I have forgotten: "
    other_value = gets.chomp
    other_value = other_value.to_i
    return other_value
end

def weight_entry
    puts "----------------------"
    puts "Thank you, and now please enter your weight in kgs: "
    other_value = gets.chomp
    other_value = other_value.to_i
    return other_value
end

def mort_interest_entry
    puts "----------------------"
    puts "Thank you, and now please enter your interest rate as a number (0.05 = 5% as an example): "
    other_value.to_f = gets.chomp
    other_value = other_value.to_f
    return other_value
end

def mort_months_entry
    puts "----------------------"
    puts "Thank you, and now please enter the remaining time of your mortage in months: "
    other_value = gets.chomp
    other_value = other_value.to_i
    return other_value
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    # process the menu choice (do the calc...)
    case menu_choice
        when 'a'
            puts "----------------------"
            puts 'You chose Addition!'
            new_value = init_value.to_f + int_entry
            init_value = new_value
            puts "===================================="
            puts "Thank you, the new value is: #{new_value}"
            puts "===================================="
        when 's'
            puts "----------------------"
            puts 'You chose Subtraction!'
            new_value = init_value.to_f - int_entry
            init_value = new_value
            puts "===================================="
            puts "Thank you, the new value is: #{new_value}"
            puts "===================================="
        when 'm'
            puts "----------------------"
            puts 'You chose Multiplication!'
            new_value = init_value.to_f * int_entry
            init_value = new_value
            puts "===================================="
            puts "Thank you, the new value is: #{new_value}"
            puts "===================================="
        when 'd'
            puts "----------------------"
            puts 'You chose Division!'
            new_value = init_value.to_f / int_entry
            init_value = new_value
            puts "===================================="
            puts "Thank you, the new value is: #{new_value}"
            puts "===================================="
        when 'e'
            puts "----------------------"
            puts 'You chose Exponent!'
            new_value = init_value.to_f ** int_entry
            init_value = new_value
            puts "===================================="
            puts "Thank you, the new value is: #{new_value}"
            puts "===================================="
        when 'sq'
            puts "----------------------"
            puts 'You chose Square Root!'
            new_value = Math.sqrt(init_value).to_f
            init_value = new_value
            puts "===================================="
            puts "Thank you, the new value is: #{new_value}"
            puts "===================================="
        when 'bmi'
            puts "----------------------"
            puts 'You chose BMI!'
            new_value = weight_entry / ((init_value.to_f / 100) ** 2)
            init_value = new_value
            puts "===================================="
            puts "Thank you, your BMI is: #{new_value}"
            puts "===================================="
        when 'mort'
            puts "----------------------"
            puts 'You chose Mortage Repayment Calculator!'
            mort_interest = mort_interest_entry
            mort_months = mort_months_entry
            new_value = init_value * (mort_interest * (1 + mort_interest) ** mort_months) / ((1 + mort_interest) ** mort_months - 1)
            init_value = new_value
            puts "===================================="
            puts "Thank you, your monthly repayments are: #{new_value}"
            puts "===================================="
        else
            "This was an invalid selection"
        end
    show_menu
    menu_choice = gets.chomp.downcase
    # the above will show you the calculator until you hit Q
end

puts "Thanks for using my calculator"