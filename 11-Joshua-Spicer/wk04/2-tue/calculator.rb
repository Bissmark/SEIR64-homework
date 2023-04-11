def show_menu
    puts "Calculator".center(80, "-")
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponent"
    puts "[r] - Square Root"
    puts "[q] - Quit"
    print "Enter your choice: "
  end
  
  def addition
    print "Enter the first number: "
    num1 = gets.chomp.to_f
    print "Enter the second number: "
    num2 = gets.chomp.to_f
    result = num1 + num2
    puts "The result of adding #{num1} and #{num2} is #{result}"
  end
  
  def subtraction
    print "Enter the first number: "
    num1 = gets.chomp.to_f
    print "Enter the second number: "
    num2 = gets.chomp.to_f
    result = num1 - num2
    puts "The result of subtracting #{num2} from #{num1} is #{result}"
  end
  
  def multiplication
    print "Enter the first number: "
    num1 = gets.chomp.to_f
    print "Enter the second number: "
    num2 = gets.chomp.to_f
    result = num1 * num2
    puts "The result of multiplying #{num1} and #{num2} is #{result}"
  end
  
  def division
    print "Enter the first number: "
    num1 = gets.chomp.to_f
    print "Enter the second number: "
    num2 = gets.chomp.to_f
    if num2.zero?
      puts "Division by zero is undefined"
    else
      result = num1 / num2
      puts "The result of dividing #{num1} by #{num2} is #{result}"
    end
  end
  
  def exponent
    print "Enter the base number: "
    base = gets.chomp.to_f
    print "Enter the exponent: "
    exponent = gets.chomp.to_f
    result = base ** exponent
    puts "#{base} raised to the power of #{exponent} is #{result}"
  end
  
  def square_root
    print "Enter the number: "
    num = gets.chomp.to_f
    if num.negative?
      puts "Square root of a negative number is undefined"
    else
      result = Math.sqrt(num)
      puts "The square root of #{num} is #{result}"
    end
  end
  
  show_menu
  menu_choice = gets.chomp.downcase
  
  until menu_choice == 'q'
    case menu_choice
    when 'a'
      addition
    when 's'
      subtraction
    when 'm'
      multiplication
    when 'd'
      division
    when 'e'
      exponent
    when 'r'
      square_root
    else
      puts "Invalid selection. Try again."
    end
    show_menu
    menu_choice = gets.chomp.downcase
  end
  
  puts "Thanks for using this amazing calculator!"
  