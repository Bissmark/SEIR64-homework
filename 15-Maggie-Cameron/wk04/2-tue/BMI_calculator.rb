def show_menu 
    puts "BMI Calculator".center(80)
    puts "-=" * 40
end
show_menu

    print "What is your weight(kg): "
    weight = gets.to_i
    print "What is your height(cm): "
    height = gets.to_i
    def bmi(a,b)
        result = (a * a) / b
        puts "Your BMI is: #{ result }"
        if result < 20 
            print "You are underweight."
        elsif result < 30 
            print "You are a helthy weight."
        else
            print "You are overweight."
        end
    end
    bmi weight,height

puts " Thanks for using this calculator."
