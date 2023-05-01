Forest.destroy_all

Forest.create :name => 'Amazon Forest', :country => 'Brazil', :plants => '40000', :weather => 'humid tropical'
Forest.create :name => 'Yakushima Forest', :country => 'Japan', :plants => '1900', :weather => 'humid sub-tropical'

puts"#{ Forest.count } forests created."