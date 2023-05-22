def info
    menu = "BMI Calculator"
    centered_menu = menu.center(80)
    puts centered_menu 
    puts "-=" * 40 

end

info

def bmi_cal(weight, height)
    weight / Math.sqrt(height)
end

print "Enter your body weight(kg): "
weight = gets.to_f
print "Enter your body height(m): "
height = gets.to_f

puts "Your BMI is #{ bmi_cal weight, height}"
