Studio.destroy_all

Studio.create(:name => 'Madhouse', :founded => '1972', :image => 'https://carolinasobral.files.wordpress.com/2013/01/madhouse.jpg')
Studio.create(:name => 'Studio Ghibli', :founded => '1985', :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png')
Studio.create(:name => 'Mappa', :founded => '2011', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/MAPPA_Logo.svg/2560px-MAPPA_Logo.svg.png')

puts "#{ Studio.count } studios created"

Anime.destroy_all

Anime.create(:name => 'Death Note', :synonyms => 'DN', :aired => '2006', :status => 'Finished', :description => 'The story follows Light Yagami, a genius who discovers a mysterious notebook: the "Death Note", which belonged to the shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages.')
Anime.create(:name => 'Parasyte: The Maxim', :synonyms => 'Kiseijuu: Sei no Kakuritsu, Parasite, Parasitic Beasts, Parasyte', :aired => '2014', :status => 'Finished', :description => 'All of a sudden, they arrived: parasitic aliens that descended upon Earth and quickly infiltrated humanity by burrowing into the brains of vulnerable targets. These insatiable beings acquire full control of their host and are able to morph into a variety of forms in order to feed on unsuspecting prey. Sixteen-year-old high school student Shinichi Izumi falls victim to one of these parasites, but it fails to take over his brain, ending up in his right hand instead. Unable to relocate, the parasite, now named Migi, has no choice but to rely on Shinichi in order to stay alive. Thus, the pair is forced into an uneasy coexistence and must defend themselves from hostile parasites that hope to eradicate this new threat to their species.')

puts "#{ Anime.count } animes created"