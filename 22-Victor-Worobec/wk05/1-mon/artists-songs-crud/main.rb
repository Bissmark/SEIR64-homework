require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

class Artist < ActiveRecord::Base
    has_many :songs, dependent: :destroy
end

class Song < ActiveRecord::Base
    belongs_to :artist
end

ActiveRecord::Base.logger = Logger.new(STDERR)

# Landing page
get '/' do
    erb :home
end

# *** ARTISTS *********************************

# Index page
get '/artists' do
    @artists = Artist.all 
    erb :artists_index
end

# New item page
get '/artists/new' do
    erb :artists_new
end

# Create item, redirect
post '/artists' do
    artist = Artist.create(name: params[:name], alive: params[:alive], image: params[:image] )
    redirect to("/artists/#{ artist.id }")    
end

# Show item
get '/artists/:id' do
    @artist = Artist.find params[:id]
    erb :artists_show
end

# Edit item
get '/artists/:id/edit' do
    @artist = Artist.find params[:id]
    erb :artists_edit
end

# Update item in database
post '/artists/:id' do
    artist = Artist.find params[:id]
    artist.update(name: params[:name], alive: params[:alive], image: params[:image] )
    redirect to("/artists/#{ artist.id }")
end

# Delete item
get '/artists/:id/delete' do
    artist = Artist.find params[:id]
    artist.destroy
    redirect to('/artists')
end

# *** SONGS *******************************

# Index page
get '/songs' do
    @songs = Song.all 
    erb :songs_index
end

# New item page
get '/songs/new' do
    erb :songs_new
end

# Create item, redirect
post '/songs' do
    song = Song.new(name: params[:name], genre: params[:genre], duration: params[:duration], youtube: params[:youtube] )

    # test association
    artist = Artist.find_by(name: params[:artist])
    song.artist = artist if artist
    song.save
    redirect to("/songs/#{ song.id }")    
end

# Show item
get '/songs/:id' do
    @song = Song.find params[:id]
    erb :songs_show
end

# Edit item
get '/songs/:id/edit' do
    @song = Song.find params[:id]
    erb :songs_edit
end

# Update item in database, redirect
post '/songs/:id' do
    song = Song.find params[:id]
    song.update(name: params[:name], genre: params[:genre], duration: params[:duration], youtube: params[:youtube] )

    # test association
    artist = Artist.find_by(name: params[:artist])
    song.artist = artist if artist
    song.save
    redirect to("/songs/#{ song.id }")
end

# Delete item
get '/songs/:id/delete' do
    song = Song.find params[:id]
    song.destroy
    redirect to('/songs')
end