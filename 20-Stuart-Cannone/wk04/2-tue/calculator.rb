def show_menu
    puts "Calculator" # TODO: check out the .center method to make this look nicer
    puts "-=" * 40 # Budget horizontal dividing line
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division "
    puts "[p] - Power Of "
    puts "[b] - BMI Calculator"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
      puts "You chose addition!"
      print "Enter the first number: "
      num1 = gets.chomp.to_i
      print "Enter the second number: "
      num2 = gets.chomp.to_i
      result = num1 + num2
      puts "The result of adding #{num1} and #{num2} is #{result}."
     
    when 's'
        puts "You chose subtraction!"
        print "Enter the first number: "
        num1 = gets.chomp.to_i
        print "Enter the second number: "
        num2 = gets.chomp.to_i
        result = num1 - num2
        puts "The result of subtracting #{num1} and #{num2} is #{result}."
    
    when 'm'
        puts "You chose multiplication !"
        print "Enter the first number: "
        num1 = gets.chomp.to_i
        print "Enter the second number: "
        num2 = gets.chomp.to_i
        result = num1 * num2
        puts "The result of multiplying #{num1} and #{num2} is #{result}."
    
    when 'd'
        puts "You chose division!"
        print "Enter the first number: "
        num1 = gets.chomp.to_i
        print "Enter the second number: "
        num2 = gets.chomp.to_i
        result = num1 / num2
        puts "The result of subtracting #{num1} and #{num2} is #{result}."  
        
      when 'p'
        puts "You chose power of !"
        print "Enter the first number: "
        num1 = gets.chomp.to_i
        print "Enter the second number: "
        num2 = gets.chomp.to_i
        result = num1 ** num2
        puts "The result of  #{num1} to the power of #{num2} is #{result}."

      when 'b'
        puts "You chose the BMI Calculator!"
        print "Enter your weight in KG: "
        num1 = gets.chomp.to_f
        print "Enter your height in CM: "
        num2 = gets.chomp.to_f
        result = (num1/ (num2 **2)) * 10,000 
        puts "The BMI for weight #{num1} and height #{num2} is #{result}."  
    else
      puts "Invalid selection. Please enter a valid menu choice."
    end
    show_menu
    menu_choice = gets.chomp.downcase
  end
  
  puts "Thanks for using this calculator!" 