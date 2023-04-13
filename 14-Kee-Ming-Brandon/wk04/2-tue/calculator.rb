# # Calculator
def menu
    puts "+-*/" * 17
    puts "Calculator".center(70)
    puts "+-*/" * 17
    puts "Calculation menu"
    puts "=" * 14
    puts "[+] - Addition"
    puts "[-] - Subtraction"
    puts "[*] - Multiplication"
    puts "[/] - Division"
    puts "[^] - Exponents"
    puts "[s] - Square roots"
    puts "[m] - Mortgage (Not yet complete)"
    puts "[q] - Quiting calculator"
    print "Enter calculator type: "
end

menu
operation = gets.chomp.downcase

until operation == 'q'
    case operation
    when '+'
        puts "Addition calculator activated! "
        print "Enter first number: "
        numb1 = gets.to_f
        print "#{ numb1 } + "
        numb2 = gets.to_f
        puts "= #{ numb1 + numb2 }"
    when '-'
        puts "Subtraction calculator activated:"
        print "Enter first number: "
        numb1 = gets.to_f
        print "#{ numb1 } - "
        numb2 = gets.to_f
        puts "= #{ numb1 - numb2 }"
    when '*'
        puts "Multiplication calculator activated:"
        print "Enter first number: "
        numb1 = gets.to_f
        print "#{ numb1 } * "
        numb2 = gets.to_f
        puts "= #{ numb1 * numb2 }"
    when '/'
        puts "Division calculator activated:"
        print "Enter first number: "
        numb1 = gets.to_f
        print "#{ numb1 } / "
        numb2 = gets.to_f
        puts "= #{ numb1 / numb2 }"
    when '^'
        puts "Exponents calculator activated:"
        print "Enter first number: "
        numb1 = gets.to_f
        print "#{ numb1 } ^ "
        numb2 = gets.to_f
        puts "= #{ numb1 ** numb2 }"
    when 's'
        puts "Square roots calculator activated:"
        print "Square root of "
        numb1 = gets.to_f
        puts "= #{ Math.sqrt(numb1) }"
    when 'm'
        puts "Mortgage calculator activated:"
        print "Amount borrowed: $"
        amount = gets.to_f
        print "Average interest rate (%): "
        int = gets.to_f
        print "Length of loan (years): "
        length = gets.to_i
        print "Loan fee (yearly): "
        fee = gets.to_f
        # until month == length * 12
        PMT = (amount + ((amount + amount*(1 + int/100)**length) / ((1 + int/100)**length-1))) * (-int/100 / (1 + int/100))

        puts "If you borrow $#{ amount } for #{ length } years with an average interest of #{ int }% and loan fee of $#{ fee } per year, your monthly repayment would be #{ (amount * int / 100 * length + amount + fee * length ) / ( 12 * length ) }."
    else
        puts "Please enter the right operation from the selections above."
    end
    menu
    operation = gets.chop.downcase
end

puts "Thanks for using this calculator."


# Homework question
# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu

# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)

# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)



# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour