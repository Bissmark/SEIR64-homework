Region.destroy_all

Region.create(:name => 'Provence', :location => 'South East', :population => '5000000', :famous_appellation => 'Côtes de Provence', :image => 'https://upload.wikimedia.org/wikipedia/commons/0/03/Lavender_field_and_Mont_Ventoux.jpg')

Region.create(:name => 'Loire Valley', :location => 'Central', :population => '2500000', :famous_appellation => 'Sancerre', :image => 'https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/034/535/large/ea8069c3053e8206b5a2a82239463cd4/article-france-loire-chenonceau-chateau.jpg')

Region.create(:name => 'Languedoc', :location => 'South', :population => '2700000', :famous_appellation => 'Côtes du Roussillon', :image => 'https://www.propertyguides.com/france/media/sites/2/France-Town-and-harbour-of-Collioure-Languedoc-Roussillon-France.jpg')

Region.create(:name => 'Burgundy', :location => 'East', :population => '160000', :famous_appellation => 'Gevrey-Chambertin', :image => 'https://www.winetourism.com/files/2020/07/Depositphotos_2677603_l-2015-min.jpg')

puts "#{ Region.count } regions created."


Dish.destroy_all

Dish.create(:name => 'Boeuf Bourguignon', :region => 'Burgundy', :course => 'Main', :main_ingredient => 'Beef, red wine', :image => 'https://food-images.files.bbci.co.uk/food/recipes/boeuf_bourguignon_25475_16x9.jpg')
Dish.create(:name => 'Bouillabaisse', :region => 'Provence', :course => 'Main', :main_ingredient => 'Seafood', :image => 'https://www.lecreuset.com/on/demandware.static/-/Sites-le-creuset-master/default/dw3213ff46/images/cat_recipes/LCR-2576-Bouillabaisse-with-Sundried-Tomato-Aioli.jpg')
Dish.create(:name => 'Rillettes de Tours', :region => 'Loire Valley', :course => 'Starter', :main_ingredient => 'Pork', :image => 'https://www.deliaonline.com/sites/default/files/quick_media/pork-rillettes-de-tours.jpg')
Dish.create(:name => "Gratin d'artichauts", :region => 'Languedoc', :course => 'Side', :main_ingredient => 'Artichoke', :image => 'https://platetrecette.com/wp-content/uploads/2017/09/gratin-dartichauts.jpg')

puts "#{ Dish.count } dishes created."