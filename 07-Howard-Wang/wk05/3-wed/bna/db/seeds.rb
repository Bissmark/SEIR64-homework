Author.destroy_all

Author.create(:name => 'J.K.Rowling', :nationality => "British", :dob => "1965-07-31", :image => "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3bDP-AbnH7l2pjO-SwJkEFQu9dxDE6V8wyJ_5x_lfkVpTMA80")
Author.create(:name => 'Michelle Magorian', :nationality => "British", :dob => "1947-11-06", :image => "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT90n2UONE6yGifSL6OfeS9PK5CxQDwpDtzi4W6aTx-GZkn0dK4akpThZudwickco9W")

puts "#{ Author.count } authors created."

Book.destroy_all

Book.create(:title => 'Harry Potter I', :year => "1997", :image => "https://www.bigw.com.au/medias/sys_master/images/images/h4e/hee/29656777588766.jpg")
Book.create(:title => 'Good Night Mr Tom', :year => "1981", :image => "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT64gteZFhY2xyIc8CwT-oQ8LYq5LpgNLPDT1pUzFjy3YT3FPL1")

puts "#{ Book.count } books created."
