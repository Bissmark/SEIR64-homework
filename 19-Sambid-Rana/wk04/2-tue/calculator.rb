
#Exponent function
def pow(base_no, pow_no)
    result = 1

    pow_no.times do
    result = result * base_no    
    end
    return result
end

#Monthly Mortgage Payment
def mort_pay (p, i, n) # P = Total amout of loan(Principal), I = interest rate/12, N = Mortgage repayment period in years

    monthly_i_rate = (i.to_f/100)/12
    no_of_payments = n.to_f * 12 
    
    return p.to_f * ( (monthly_i_rate * (1 + monthly_i_rate)** no_of_payments) / ((1 + monthly_i_rate)**no_of_payments - 1) )


    # M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]. 


    #not getting the exact answer, is it because of floating no's or maybe somethings to do with the return statement? 


end


#BMI calculator
def bmi_calc (kg, cm)
    m_square = (cm.to_f/100)** 2
    return kg.to_f/m_square
end

#Trip Calculator
def trip_calc (dis, km_lt, pri_lt, speed_km) 

    trip_time = "#{dis.to_f / speed_km.to_f} hrs"
    trip_cost = "#{dis.to_f * (pri_lt / km_lt) }" #no idea if this is the right formula

    return "You trip cost would amount to $#{trip_cost} and total time taken will be #{trip_time}"

end



########################

def show_menu
    puts "Calculator" # TODO: check ou tthe .center method to make this look nicer
    puts "-=" * 40 # Budget horizonta; dividing line
   
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Divide"
    puts "[e] - Exponents"
    puts "[sqrt] - Square root"
    puts "[mc] - Monthly mortgage calculation"
    puts "[bmi] - Body Mass Index"
    puts "[tc] - Trip Calculator"
    puts "[q] - Quits"


    puts "-=" * 40 # Budget horizonta; dividing line
    print "Enter your choice: "
end



show_menu
menu_choice = gets.chomp.downcase #return from show_menu

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        print "Enter the first no. "
        no1 = gets.to_i
        print "Enter the second no. "
        no2 = gets.to_i
        puts "#{no1} + #{no2} = #{ no1 + no2 }"

    when 's'
        puts "You chose subtraction!"
        print "Enter the first no. "
        no1 = gets.to_i
        print "Enter the second no. "
        no2 = gets.to_i
        puts "#{no1} - #{no2} = #{ no1 - no2 }"

    when 'm'
        puts "You chose multiplication!"
        print "Enter the first no. "
        no1 = gets.to_i
        print "Enter the second no. "
        no2 = gets.to_i
        puts "#{no1} * #{no2} = #{ no1 * no2 }"

    when 'd'
        puts "You chose division!"
        print "Enter the first no. "
        no1 = gets.to_i
        print "Enter the second no. "
        no2 = gets.to_i
        puts "#{no1} / #{no2} = #{ no1 / no2 }"

    when 'e'
        puts "You chose exponents!"
        print "Enter the first no. "
        no1 = gets.to_i
        print "Enter the raised to the power no. "
        no2 = gets.to_i
        puts "#{no1} raised to the power #{no2} = #{ pow(no1, no2) }"

    when 'sqrt'
        puts "You chose square root!"
        print "Enter the no. you want to get the square root of "
        no = gets.to_i
        puts "The square root of #{no} is #{ Math.sqrt(no) }"

    when 'mc'
        puts "You chose Mopnthly Mortgage Payment!"
        print "Enter the principal amount: "
        p_amt = gets.to_f
        print "Enter the interest percentage: "
        i_percent = gets.to_f
        print "Enter the mortgage payment period in years: "
        n_year = gets.to_f
        puts " Your monthly payment amount is : #{ mort_pay( p_amt, i_percent, n_year) }"


    when 'bmi'
        puts "You chose to get BMI!"
        print "Enter you weight in Kg's "
        kg = gets.to_f
        print "Enter you height in cm "
        cm = gets.to_f
        puts "The BMI is  #{ bmi_calc(kg, cm) }"
        
        if bmi_calc(kg, cm) >= 18.5 and bmi_calc(kg, cm) <= 24.9
            puts "You are in the healthy range"
        elsif bmi_calc(kg, cm) >= 25
            puts "You 'may' be unhealthy"
        else
            puts "Underweight? I don't know"
        end

    when 'tc'
        puts "Calculate your trip cost and trip time!"
        print "Enter the total distance travelling in km: "
        dis = gets.to_f
        print "How much km/l does the vehicle give:  "
        km = gets.to_f
        print "What is the current price per liter:  "
        price = gets.to_f
        print "What is the avg speed you expect to do in km: "
        speed = gets.to_f
        puts "#{trip_calc(dis, km, price, speed)}"


else
        puts "Invalid selection. You Idiot."
    
    end
    #process the meny choice (do the calculation)
    show_menu
    #get the new menu
    menu_choice = gets.chomp.downcase

end

puts "Thanks for using the calculaotr"