Beer.destroy_all

Beer.create(:name => 'Hoegaarden White', :beer_type => 'Wheat', :origin => 'Belgium', :size => 330 , :std_drinks => 1.3, :alcohol_vol => 4.9, :image => 'https://media.danmurphys.com.au/dmo/product/901185-1.png?impolicy=PROD_LG')

Beer.create(:name => 'Asahi Super Dry Black', :beer_type => 'Dark', :origin => 'Japan', :size => 334 , :std_drinks => 1.5, :alcohol_vol => 5.5, :image => 'https://media.danmurphys.com.au/dmo/product/1000004677_ASAHIBLK-1.png?impolicy=PROD_LG')

Beer.create(:name => 'Asahi Super Dry', :beer_type => 'Lager', :origin => 'Japan', :size => 330 , :std_drinks => 1.4, :alcohol_vol => 5.0, :image => 'https://media.danmurphys.com.au/dmo/product/98903-1.png?impolicy=PROD_LG')

Beer.create(:name => 'Guinness Stout', :beer_type => 'Stout', :origin => 'Ireland', :size => 375 , :std_drinks => 1.8, :alcohol_vol => 6.0, :image => 'https://media.danmurphys.com.au/dmo/product/19559-1.png?impolicy=PROD_LG')

Beer.create(:name => 'Coopers Extra Stout', :beer_type => 'Stout', :origin => 'Australia', :size => 375 , :std_drinks => 1.9, :alcohol_vol => 6.3, :image => 'https://media.danmurphys.com.au/dmo/product/25600-1.png?impolicy=PROD_LG')

Beer.create(:name => 'Coopers Sparkling Ale', :beer_type => 'Ale', :origin => 'Australia', :size => 375 , :std_drinks => 1.7, :alcohol_vol => 5.8, :image => 'https://media.danmurphys.com.au/dmo/product/75023-1.png?impolicy=PROD_LG')

Beer.create(:name => 'Corona Extra', :beer_type => 'Lager', :origin => 'Mexico', :size => 355 , :std_drinks => 1.3, :alcohol_vol => 4.5, :image => 'https://media.danmurphys.com.au/dmo/product/357480-1.png?impolicy=PROD_LG')

puts "#{ Beer.count } works created."

Brewery.destroy_all

Brewery.create(:name => 'Hoegaarden Brewery', :founder => 'Monks in the village of Hoegaarden', :establish => 1445, :origin => 'Hoegaarden, Belgium', :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Hoegaarden.svg/1280px-Hoegaarden.svg.png')

Brewery.create(:name => 'Asahi Breweries', :founder => 'Kumagai Ichibei', :establish => 1889, :origin => 'Osaka, Japan', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Asahi_logo.svg/1200px-Asahi_logo.svg.png')

Brewery.create(:name => 'Guinness Brewery', :founder => 'Arthur Guinness', :establish => 1759, :origin => 'Dublin, Ireland', :image => 'https://cdn.shopify.com/s/files/1/0263/9292/0126/products/keg-beer-guinness-draught-30l-keg-29454241890501_1080x.png?v=1627836979')

Brewery.create(:name => 'Coopers Brewery', :founder => 'Thomas Cooper,', :establish => 1862, :origin => 'Adelaide, South Australia', :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Coopers_Brewery_logo.svg/220px-Coopers_Brewery_logo.svg.png')

Brewery.create(:name => 'Cervecería Modelo', :founder => 'Pablo Diez Fernandez', :establish => 1925, :origin => 'Mexico', :image => 'https://www.grupomodelo.com/sites/g/files/seuoyk516/files/logo_grupo_modelo_2.png')

puts "#{ Brewery.count } works created."