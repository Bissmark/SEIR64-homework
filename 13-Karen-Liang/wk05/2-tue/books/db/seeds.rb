Manga.destroy_all

Manga.create :name => "Uzumaki", :authors => "Junji itou", :status => "Finished", :published => 1998, :description => "update"

puts "#{ Manga.count } mangas created"