print "\nType a ruby command... "
input = gets.chomp

until input == 'q'
    print eval(input)
    print "\n\nType a ruby command... "
    input = gets.chomp
end

# Bonus Challenge
# Do-It-Yourself Ruby REPL
# Try to create your own Ruby REPL (Read Evaluate Print Loop) program.

# It should show a prompt, read some Ruby code from the user, evaluate their code, print the result and loop back to the start.

# Sample Session
# $ ruby repl.rb
# Welcome to Ruby REPL
# > 2 + 7
# 9
# > "some" + "string"
# "somestring"