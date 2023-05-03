Manufacturer.destroy_all

Manufacturer.create(:name => 'Ford', :founder => 'Henry Ford', :founded => 'June 16, 1903', :origin => 'Michigan, USA', :image => 'https://www.ford.com.au/content/dam/Ford/website-assets/ap/au/about/use-of-logo/images/use-of-logo.jpg/jcr:content/renditions/small.jpeg')
Manufacturer.create(:name => 'Toyota', :founder => 'Kiichiro Toyoda', :founded => 'August 28, 1937', :origin => 'Toyota City, Japan', :image => 'https://i.pinimg.com/originals/b0/61/39/b061393385bcfb4b3c5230984b9c618f.jpg')
Manufacturer.create(:name => 'Volkswagen', :founder => 'German Labour Front', :founded => 'May 28, 1937', :origin => 'Wolfsburg, Germany', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/1200px-Volkswagen_logo_2019.svg.png')

puts "#{ Manufacturer.count } manufacturers created."

Car.destroy_all

Car.create(:name => 'Ford', :model => 'Mustang Mach-E', :year => '2023', :acceleration => '5.8 sec', :driveline => 'AWD', :image => 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mustang-mach-e-gt-performance-edition-01-1606835027.jpg' )
Car.create(:name => 'Toyota', :model => 'Supra RZ', :year => '1998', :acceleration => '8.1 sec', :driveline => 'RWD', :image => 'https://i.pinimg.com/736x/6b/f9/bb/6bf9bb1404e4eb797cf7cbf081e696b0.jpg')
Car.create(:name => 'Volkswagen', :model => 'Golf R mk6', :year => '2010', :acceleration => '6.6 sec', :driveline => 'AWD', :image => 'https://live.staticflickr.com/2523/3932605956_4fc4660767_b.jpg')

puts "#{ Car.count } cars created"