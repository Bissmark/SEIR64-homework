# def show_menu
#     puts "Calculator"
#     puts "-=/\/\=-" * 40
#     puts "[a] - Addition"
#     puts "[s] - Subtraction"
#     puts "[m] - multiplication"
#     puts "[d] - division"
#     puts "[q] - Quit"
#     print "Enter your choice: "
# end

# loop do
#     print "Enter you choice: "
#     choice = gets.chomp.to_i

#     case choice
#     when a
#         print "Enter the first number: "
#         num1 = gets.chomp.to_f
# end




# show_menu
# menu_choice = gets.chomp.downcase

# until menu_choice == 'q'
# case menu_choice
# when 'a'
# puts "You chose addition"
# when 's'
# puts "You chose Subtraction"
# when 'm'
#     puts "You chose Multiplication"
# when 'd'
#     puts "You chose Division"
# puts "Input first number: "

# else 
#     puts "Invalid selection"
# end
# show_menu
# menu_choice = gets.chomp.downcase
# end


# puts "Thanks for using this crappy calculator"


def calculator
    puts "Calculator"
    puts "-=/\/\=-" * 40
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - multiplication"
    puts "[d] - division"
    puts "[q] - Quit"
    
    loop do
      print "Enter your choice: "
      choice = gets.chomp.downcase
      
      case choice
      when 'a'
        print "Enter the first number: "
        num1 = gets.chomp.to_f
        print "Enter the second number: "
        num2 = gets.chomp.to_f
        puts "#{num1} + #{num2} = #{num1 + num2}"
      when 's'
        print "Enter the first number: "
        num1 = gets.chomp.to_f
        print "Enter the second number: "
        num2 = gets.chomp.to_f
        puts "#{num1} - #{num2} = #{num1 - num2}"
      when 'm'
        print "Enter the first number: "
        num1 = gets.chomp.to_f
        print "Enter the second number: "
        num2 = gets.chomp.to_f
        puts "#{num1} * #{num2} = #{num1 * num2}"
      when 'd'
        print "Enter the first number: "
        num1 = gets.chomp.to_f
        print "Enter the second number: "
        num2 = gets.chomp.to_f
        puts "#{num1} / #{num2} = #{num1 / num2}"
      when 'q'
        puts "Goodbye!"
        break
      else
        puts "Invalid choice. Please try again."
      end
    end
  end
  
  calculator()