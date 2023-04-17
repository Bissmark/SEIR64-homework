# Intro header
puts "--" * 40 # Budget horizontal dividing line
puts "BMI Calculator".center(80) 
puts "--" * 40 # Budget horizontal dividing line

# Intro blurb
puts "Let's calculate your BMI!"

# HEIGHT INPUT
print "Input your height in cm: "

# HEIGHT
# float to return decimal
height = gets.to_f

meter = height / 100

square_root = meter ** 2



# WEIGHT INPUT
print "Input your weight in kg: "

weight = gets.to_f

bmi = weight / square_root

if bmi <= 18.4
    puts "You are underweight"

elsif bmi >= 18.5 and bmi <= 24.9
    puts "You are normal"

elsif bmi >= 25.0 and bmi <= 39.9
    puts "You are overweight"

elsif bmi >= 40
    puts "You are obese"

end