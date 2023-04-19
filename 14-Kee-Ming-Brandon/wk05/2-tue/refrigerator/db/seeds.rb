Fridge.destroy_all

Fridge.create :brand => 'LG', :model => 'GB-455UPLE', :image => 'https://www.appliancesonline.com.au/ak/f/7/a/2/f7a2fceb8ceb46859d2134f0b708217f21f112a6_GB_455UPLE_SideView_high-high.jpeg', :color => 'Graphite Black', :volumn => 420, :weight => 84, :energy => 3.5

Fridge.create :brand => 'Fisher & Paykel', :model => 'RF522BRPX6', :image => 'https://www.appliancesonline.com.au/ak/b/8/4/6/b8462322f15b21135c352926ecedbf9a734ce176_Fisher_Paykel_RF522BRPX6_519L_Bottom_Mount_Fridge_Hero_Image_high-high.jpeg', :color => 'Stainless Steel', :volumn => 494, :weight => 100, :energy => 3

Fridge.create :brand => 'Haier', :model => 'HRF450BS2', :image => 'https://www.appliancesonline.com.au/ak/2/c/e/f/2cefe47d133891aa3d87d4e5aa02a9e04b0f433b_haier_419l_bottom_mount_frost_free_fridge_hrf450bs2_8_247669a1_high-high.jpeg', :color => 'Silver', :volumn => 416, :weight => 88, :energy => 5


puts "#{ Fridge.count } fridges created."