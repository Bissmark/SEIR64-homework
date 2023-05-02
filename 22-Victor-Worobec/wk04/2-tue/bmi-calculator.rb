def calculate_BMI (weight, height)
    weight / (height * height) 
end

puts "What is your weight (kgs)? "
weight = gets.to_f
puts "What is your height (metres)? "
height = gets.to_f
puts "Your BMI is: #{ calculate_BMI(weight, height).round(2) }"

# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight