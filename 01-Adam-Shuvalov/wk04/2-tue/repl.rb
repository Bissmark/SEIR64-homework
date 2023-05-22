puts "Welcome to my REPL"

def sum
puts yield + 5
puts yield + 5
end

sum{|4,2| 4,2}