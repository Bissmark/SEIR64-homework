require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
        :adapter => 'sqlite3',
        :database => 'database.sqlite3'
)

ActiveRecord::Base.logger=Logger.new(STDERR)

class Song < ActiveRecord::Base
end

class Group < ActiveRecord::Base
end

get '/' do
    erb :home
end

#index show everything in the songs database
get '/songs' do
    @songs = Song.all
    erb :songs_index
end

#create blank form
get '/songs/new' do
    erb :songs_new
end
#create insert
post '/songs' do
    song = Song.new
    puts song
    song.title = params[:title]
    song.image = params[:image]
    song.save
    redirect to("/songs/#{ song.id }")
end
#showpage
get '/songs/:id' do
    @song = Song.find params[:id]
    erb :songs_show
end

#Edit
get '/songs/:id/edit' do
    @song = Song.find params[:id]
    erb :songs_edit
end

#update edit
post '/songs/:id' do
    song= Song.find params[:id]
    song.title = params[:title]
    song.image = params[:image]
    song.save
    redirect to("/songs/#{ params[:id]}")
end

#destroy/delete an item from the database
get '/songs/:id/delete' do
    song = Song.find params[:id]
    song.destroy
    erb :songs_delete
end
 
# groups CRUD###############

#index
get '/groups' do
    @groups = Group.all
    erb :groups_index
end

#New blank form for a new entry for group
get '/groups/new' do
    erb :groups_new
end
#Create, insert new form data into database
post '/groups' do
    group = Group.new
    group.name = params[:name]
    group.image = params[:image]
    group.save
    redirect to("/groups/#{ group.id }")
end
#show
get '/groups/:id' do
    @group = Group.find params[:id]
    erb :groups_show
end

#edit page
get '/groups/:id/edit' do
    @group = Group.find params[:id]
    erb :groups_edit
end

post '/groups/:id' do
    group = Group.find params[:id]
    group.name = params[:name]
    group.image = params[:image]
    group.save
    # query_db"UPDATE butterflies SET name = '#{ params[:name]}', family ='#{ params[:family]}', image='#{ params[:image]}' WHERE id=#{params[:id] }"
    redirect to("/groups/#{ group.id }") # GET /butterflies/17 SHOW
end

#Destroy
get '/groups/:id/delete' do
    group = Group.find params[:id]
    group.destroy
    erb :groups_delete
end