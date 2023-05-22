subway_system = {
  'N' => ['time square', '34th', '28th', '23rd', 'union square', '8th'],
  'L' => ['8th', '6th', 'union square', '3rd', '1st'],
  'six' => ['grand central', '33rd', '28th', '23rd', 'union square', 'astor place']
}

def on_off(line_a, stop_a, line_b, stop_b, subway_system)
  l_as_a = subway_system[line_a].index(stop_a)
  l_aus = subway_system[line_a].index('union square')
  l_as_b = subway_system[line_b].index(stop_b)
  l_bus = subway_system[line_b].index('union square')
  all_stops_a = []
  all_stops_b = []
  b = nil
  c = nil
  w = nil
  d = nil
  result = 'You must travel through the following stops on the'

  if l_as_a < l_aus
    b = l_as_a + 1
    w = l_aus + 1
    c = l_as_b
    d = l_as_a
  end

  if l_as_a > l_aus
    b = l_aus
    w = l_as_a
    c = l_as_a - 1
    d = l_as_b - 1
  end

  (b...w).each { |i| all_stops_a << subway_system[line_a][i] }
  y = all_stops_a

  if line_a == line_b
    c.downto(d+1) do |j| 
        all_stops_b << subway_system[line_b][j] 
    end
    all_stops_b.reverse! if l_aus > l_as_a
    p = all_stops_b

    return "#{result} #{line_a} line: #{p.join(', ')}.\nNo need to change lines and you will reach your destination with a total of #{all_stops_b.length} stops"
  elsif l_as_b < l_bus
    b = l_bus
    w = l_as_b
  elsif l_as_b > l_bus
    b = l_as_b + 1
    w = l_bus + 1
  end

  (w...b).each { |k| all_stops_b << subway_system[line_b][k] }
  d = all_stops_b

  y = all_stops_a.reverse if l_aus < l_as_a
  d = all_stops_b.reverse if l_bus > l_as_b

  leng = all_stops_a.length + all_stops_b.length
  return "#{result} #{line_a} line: #{y.join(', ')}.\nChange at union square.\nYour journey continues through the following stops: #{d.join(', ')}\n#{leng} stops in total"
end

# Examples
puts on_off('N', 'time square', 'N', '8th', subway_system)
puts on_off('N', 'time square', 'six', '33rd', subway_system)
puts on_off('N', 'time square', 'six', 'astor place', subway_system)
puts on_off('N', '8th', 'N', 'time square', subway_system)
puts on_off('N', '8th', 'six', 'grand central', subway_system)
puts on_off('N', '28th', 'L', '1st', subway_system)
puts on_off('N', '8th', 'L', '8th', subway_system) 
puts on_off('L', '6th', 'L', '1st', subway_system) 
puts on_off('L', '6th', 'N', '8th', subway_system)
puts on_off('L', '1st', 'six', 'grand central', subway_system) 
puts on_off('L', '1st', 'six', '33rd', subway_system)
puts on_off('six', 'astor place', 'six', '33rd', subway_system) 
puts on_off('six', '33rd', 'N', 'time square', subway_system) 
puts on_off('six', '23rd', 'L', '1st', subway_system)
puts on_off('six', 'astor place', 'N', '8th', subway_system) 