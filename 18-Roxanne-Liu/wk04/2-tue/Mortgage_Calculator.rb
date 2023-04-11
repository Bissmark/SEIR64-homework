def info
    menu = "Mortgage Calculator"
    centered_menu = menu.center(80)
    puts centered_menu 
    puts "-=" * 40 

end

info

def mortgage_cal
    print "Enter your principal amount: $"
    principal = gets.to_f
    print "Enter your interest rate(%): "
    interest_rate = gets.to_f
    monthly_payment = principal * (interest_rate / 12)
    puts "Your monthly payment is #{monthly_payment}."
end

mortgage_cal


