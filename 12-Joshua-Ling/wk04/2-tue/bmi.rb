#bmi = kg/m^2

puts "BMI CALCULATOR"
print "weight in kg "
weight = gets.to_f
print "height in cm "
height = gets.to_f / 100

bmi = weight/(height * height)

puts "your bmi is #{bmi}."
case
when bmi < 18.5
    puts "on the skinnier side"
when bmi < 24.9
    puts "healthy weight"
when bmi < 29.9
    puts "on the heavier side"
when bmi > 30.0
    puts "on the heaviest side"
end

puts "don't listen to this calc you are beautiful ;)"