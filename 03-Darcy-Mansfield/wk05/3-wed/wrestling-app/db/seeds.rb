Wrestler.destroy_all

Wrestler.create :name => "Penta El Zero Miedo", :image => "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkzMzA1NjY1OTQ5NjczMzc5/penta-el-zero-miedo-aew.jpg", :country => "Mexico", :height => 180, :weight => 91, :exp => 15
Wrestler.create :name => "Rey Fenix", :image => "https://411mania.com/wp-content/uploads/2020/12/reyfenix.jpg", :country => "Mexico", :height => 177, :weight => 75, :exp => 18
Wrestler.create :name => "Mistico", :image => "https://upload.wikimedia.org/wikipedia/commons/e/ef/CMLL_November_30_Mistico_posing.jpg", :country => "Mexico", :height => 170, :weight => 79, :exp => 24
Wrestler.create :name => "Undertaker", :image => "https://cdn.vox-cdn.com/thumbor/MLKixhoMDH8zwSpxpX4Df_PPzts=/0x0:1200x675/1200x800/filters:focal(575x253:767x445)/cdn.vox-cdn.com/uploads/chorus_image/image/66922184/SD_02062008rf_542.0.jpg", :country => "USA", :height => 202, :weight => 136, :exp => 33
Wrestler.create :name => "John Cena", :image => "https://cdn.vox-cdn.com/thumbor/WewpGb9VTnO7EDnxDu4G3AcM4Lg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24317040/usa_today_16607261.jpg", :country => "USA", :height => 185, :weight => 114, :exp => 23
Wrestler.create :name => "The Rock", :image => "https://people.com/thmb/kR4T5ecNlrTQ_kM6MITnw7Do8Kw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(730x0:732x2)/dwayne-johnson-1-2000-4a8159be534f491b82346bf173eb1389.jpg", :country => "USA", :height => 193, :weight => 120, :exp => 20
Wrestler.create :name => "Kenta Kobashi", :image => "kenta.jpg", :country => "Japan", :height => 186, :weight => 115, :exp => 25
Wrestler.create :name => "Mitsuharu Misawa", :image => "mitsuharu.jpg", :country => "Japan", :height => 185, :weight => 110, :exp => 27
Wrestler.create :name => "Mayu Iwatani", :image => "mayu.jpg", :country => "Japan", :height => 163, :weight => 53, :exp => 12
Wrestler.create :name => "Andreza Giant Panda", :image => "panda.jpg", :country => "Japan", :height => 256, :weight => 108, :exp => 5

puts "#{ Wrestler.count } wrestlers created."

Promotion.destroy_all

Promotion.create :promotion => "NJPW", :logo => "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png", :country => "Japan", :year => 1972, :instagram => "https://www.instagram.com/njpw_global/"
Promotion.create :promotion => "WWE", :logo => "https://w7.pngwing.com/pngs/370/840/png-transparent-wwe-logo-white-red.png", :country => "USA", :year => 1948, :instagram => "https://www.instagram.com/wwe/"
Promotion.create :promotion => "CMLL", :logo => "https://upload.wikimedia.org/wikipedia/en/5/52/CMLL-logo-2018.png", :country => "Mexico", :year => 1933, :instagram => "https://www.instagram.com/cmll_mx/"

puts "#{ Promotion.count } promotions created."