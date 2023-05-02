# weight
# height
# kg/m ** 2

print "What is your height in cm: "
height = gets.chomp.to_f / 100

print "What is your weight in kg: "
weight = gets.chomp.to_f

puts "Your BMI is #{ (weight / height ** 2).ceil }"
bmi = (weight / height ** 2).ceil 

case bmi
when ..19
    puts "You are underweight"
when 19..25
    puts "You are healthy wieght"
when 25..30
    puts "You are overweight"
when 30..;
    puts "You are obese"
end


