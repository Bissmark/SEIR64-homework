# Loan amount - input
# Interest rate - input
# Term - input
# Repayment - calculated

# Formula M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1].
# M - Total Monthly Payment
# P - Loan amount 
# I - Interest Rate as monthly percentage
# N - Total amount of months in timeline to repayment

def calc_mortgage(loan_amount, interest_rate, payment_term )
    mth_interest_rate = ( interest_rate / 100 ) / 12 # gives me monthly interest rate
    payment_month = payment_term * 12
    mth_payment = loan_amount * ( mth_interest_rate * ( 1 + mth_interest_rate ) ** payment_month ) / ( (1 + mth_interest_rate)**payment_month - 1 )
    puts "Your monthly payment is #{mth_payment.round(2)}"
end

# Main #

puts "Mortgage Calculator".center(50)
puts "-=" * 25
puts "Welcome to the mortgage calculator!"

print "What is your loan amount: "
loan_amount = gets.chomp.to_i

print "what is your interest rate: "
interest_rate = gets.chomp.to_f # turn into float to turn into % easier later

print "What is your payment term in years: "
payment_term = gets.chomp.to_i

calc_mortgage(loan_amount, interest_rate, payment_term)

# 80000
# 5%
# 10 years
# answer is 848.52

