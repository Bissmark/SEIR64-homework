puts "Welcome to my Ruby REPL"
input = ""

until input == "q" || input == "quit" do 
    print " > "
    input = gets
    puts eval(input)
end

#confusion