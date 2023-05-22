Book.destroy_all

Book.create(:title => 'To Kill a Mockingbird', :author => 'Harper Lee', :publication => 'J. B. Lippincott & Co.', :genre => 'Fiction', :image => 'https://images.gr-assets.com/books/1361975680l/2657.jpg')
Book.create(:title => '1984', :author => 'George Orwell', :publication => 'Secker & Warburg', :genre => 'Dystopian Fiction', :image => 'https://images.gr-assets.com/books/1348990566l/5470.jpg')
Book.create(:title => 'The Great Gatsby', :author => 'F. Scott Fitzgerald', :publication => "Charles Scribner's Sons", :genre => 'Fiction', :image => 'https://images.gr-assets.com/books/1490528560l/4671.jpg')
Book.create(:title => 'Pride and Prejudice', :author => 'Jane Austen', :publication => 'T. Egerton, Whitehall', :genre => 'Romance', :image => 'https://images.gr-assets.com/books/1320399351l/1885.jpg')
Book.create(:title => 'The Catcher in the Rye', :author => 'J.D. Salinger', :publication => 'Little, Brown and Company', :genre => 'Fiction', :image => 'https://images.gr-assets.com/books/1398034300l/5107.jpg')

puts "#{ Book.count } books created."

Writer.destroy_all

Writer.create(:name => 'Jane Austen', :dob => '1775-12-16', :nationality => 'British', :image => 'https://upload.wikimedia.org/wikipedia/commons/1/18/CassandraAusten-JaneAusten%28c.1810%29_hires.jpg')
Writer.create(:name => 'William Shakespeare', :dob => '1564-04-26', :nationality => 'British', :image => 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg')
Writer.create(:name => 'Virginia Woolf', :dob => '1882-01-25', :nationality => 'British', :image => 'https://upload.wikimedia.org/wikipedia/commons/1/12/Virginia_Woolf%2C_January_1902.jpg')
Writer.create(:name => 'James Joyce', :dob => '1882-02-02', :nationality => 'Irish', :image => 'https://upload.wikimedia.org/wikipedia/commons/0/0f/James_Joyce_1915.jpg')
Writer.create(:name => 'Ernest Hemingway', :dob => '1899-07-21', :nationality => 'American', :image => 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Ernest_Hemingway_1923_passport_photo.jpg')
Writer.create(:name => 'Gabriel Garcia Marquez', :dob => '1927-03-06', :nationality => 'Colombian', :image => 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Gabriel_Garcia_Marquez.jpg')

puts "#{ Writer.count } writers created."
