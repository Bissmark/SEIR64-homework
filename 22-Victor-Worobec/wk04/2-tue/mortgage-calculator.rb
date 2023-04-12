def calculate_mortgage (loan_amount, months, interest_rate)
    # formula found online
    monthly_percentage = (interest_rate / 100) / 12
    loan_amount * (monthly_percentage * ((1 + monthly_percentage) ** months)) / (((1 + monthly_percentage) ** months) - 1)
end

puts "Loan amount: "
loan = gets.to_i
puts "Months of repayment: "
months = gets.to_i
puts "Interest rate (float):"
interest_rate = gets.to_f

puts "Based on data provided, your monthly repayments will be $#{ calculate_mortgage(loan, months, interest_rate).round(2) }."

# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)