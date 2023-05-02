# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# BASED - https://www.ngv.vic.gov.au/media_release/ngv-triennial-2023-75-projects-by-100-artists-designers-and-collectives-from-30-countries/

Artist.destroy_all

Artist.create(:name => 'Sheila Hicks', :nationality => 'USA', :dob => '1934-07-24', :style => 'Textile', :image => 'https://cdn.mos.cms.futurecdn.net/aMcu7reU4oX3EAVBaa7yQL-1024-80.jpg.webp')
Artist.create(:name => 'Tracey Emin', :nationality => 'UK', :dob => '1963-07-03', :style => 'Confessional', :image => 'https://i.guim.co.uk/img/media/fd93b9899c51733772a317bbce00d79cf33dee08/0_227_5046_3028/master/5046.jpg?width=940&quality=85&dpr=1&s=none')
Artist.create(:name => 'Petrit Halilaj', :nationality => 'Kosova', :dob => '1986-12-25', :style => 'Cultural Identity', :image => 'https://backend.artreview.com/wp-content/uploads/2020/07/Kosovo-Road-to-Venice__17-e1494928122716-1230x627.jpg')
Artist.create(:name => 'Betty Muffler', :nationality => 'Aboriginal Australia', :dob => '1944-04-20', :style => 'Iwantja', :image => 'https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-shortstgallery/usr/images/artists/group_images_override/items/57/574ce065ad6c4221b914553edbd7305f/betty-muffler-v2.jpg')
Artist.create(:name => 'Yoko Ono', :nationality => 'Japan', :dob => '1933-02-18', :style => 'Multimedia', :image => 'https://pyxis.nymag.com/v1/imgs/aab/7c3/240010911fa9c5e67904ba4c7ffdddd654-13-yoko-ono-1.rvertical.w570.jpg')
Artist.create(:name => 'David Shrigley', :nationality => 'UK', :dob => '1968-09-17', :style => 'Distinctive Drawings', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/David_Shrigley.jpg/220px-David_Shrigley.jpg')
Artist.create(:name => 'Elsa Schiaperalli', :nationality => 'France', :dob => '1890-09-10', :style => 'Surrealism', :image => 'https://thejewelryloupe.com/wp-content/uploads/elsa-schiaparelli-headscarf-683x1024.jpeg')

puts "#{ Artist.count } artists created."

Exhibit.destroy_all

Exhibit.create(:title => 'Untitled', :year => '1968', :medium => 'Oil on canvas', :style => 'Minimalism', :image => 'https://www.ngv.vic.gov.au/wp-content/uploads/2011/10/1017_vanm-1024x769.jpg') 
Exhibit.create(:title => 'Grey Night (Black and White)', :year => '1963', :medium => 'Oil on canvas', :style => 'Abstract Expressionism', :image => 'https://www.ngv.vic.gov.au/wp-content/uploads/2011/10/0983_vanm-1024x777.jpg')
Exhibit.create(:title => 'The Flatland', :year => '1967', :medium => 'Acrylic on canvas', :style => 'Op art', :image => 'https://www.ngv.vic.gov.au/wp-content/uploads/2011/10/1065_bri-1024x781.jpg')
Exhibit.create(:title => 'The Migrant', :year => '1965', :medium => 'Oil on canvas', :style => 'Social realism', :image => 'https://www.ngv.vic.gov.au/wp-content/uploads/2011/10/1048_bri-1024x810.jpg')
Exhibit.create(:title => 'Spring at Marnau', :year => '1908', :medium => 'Oil on canvas', :style => 'Expressionism', :image => 'https://www.ngv.vic.gov.au/wp-content/uploads/2015/09/003200_original.jpg')
Exhibit.create(:title => 'Hawthorn', :year => '1905', :medium => 'Oil on canvas', :style => 'Impressionism', :image => 'https://www.ngv.vic.gov.au/wp-content/uploads/2011/10/2073_vie-1024x710.jpg')
Exhibit.create(:title => 'Mt Leinster, Co. Carlow', :year => '1951', :medium => 'Oil on canvas', :style => 'Expressionism', :image => 'https://www.ngv.vic.gov.au/wp-content/uploads/2011/10/5455_gvz-1024x698.jpg')

puts "#{ Exhibit.count } exhibits created."