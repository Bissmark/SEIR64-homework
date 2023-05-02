require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

# Tedious configuration: tomorrow Rails will do this for you
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional bonus:

ActiveRecord::Base.logger = Logger.new(STDERR)

# Models: a class that is backed by a database table
class Footyteam < ActiveRecord::Base
end

class Player < ActiveRecord::Base
end



get '/' do
    erb :home
end

# INDEX
# Show you all the footyteams
get '/footyteams' do
    @footyteams = Footyteam.all
    erb :footyteams_index
end

# NEW
# Blank form for a new footyteam
get '/footyteams/new' do
    erb :footyteams_new
end

# CREATE
# Insert the user's form data into the database
post '/footyteams' do
    footyteam = Footyteam.new
    footyteam.name = params[:name]
    footyteam.family = params[:family]
    footyteam.image = params[:image]
    footyteam.save
    redirect to("/footyteams/#{ footyteam.id }") # GET /footyteams
end

# SHOW
# Show a single footyteam
get '/footyteams/:id' do
    @footyteam = Footyteam.find params[:id]
    erb :footyteams_show
end

# EDIT
# Pre-filled form for updating a footyteam
get '/footyteams/:id/edit' do
    @footyteam = Footyteam.find params[:id]
    erb :footyteams_edit
end

# UPDATE
# Update a footyteam with the user's form data
post '/footyteams/:id' do
    footyteam = Footyteam.find params[:id]
    footyteam.name = params[:name]
    footyteam.family = params[:family]
    footyteam.image = params[:image]
    footyteam.save
    redirect to("/footyteams/#{ params[:id] }") # GET /footyteams/17 SHOW
end

# DESTROY
# Delete a footyteam from the database
get '/footyteams/:id/delete' do
    footyteam = Footyteam.find params[:id]
    footyteam.destroy
    redirect to('/footyteams')
end

# players CRUD #######################

# INDEX
get '/players' do
    @players = Player.all
    erb :players_index
end 

# NEW
# Blank form for a new footyteam
get '/players/new' do
    erb :players_new
end

# CREATE
post '/players' do
    player = Player.new
    player.name = params[:name]
    player.image = params[:image]
    player.save
    redirect to("/players/#{ player.id }")
end

# SHOW
# Show a single player
get '/players/:id' do
    @player = Player.find params[:id]
    erb :players_show
end

# EDIT
get '/players/:id/edit' do
    @player = Player.find params[:id]
    erb :players_edit
end

# UPDATE
post '/players/:id' do
    player = Player.find params[:id]
    player.name = params[:name]
    player.image = params[:image]
    player.save
    redirect to("/players/#{ player.id }")
end

# DESTROY
get '/players/:id/delete' do
    player = Player.find params[:id]
    player.destroy
    redirect to('/players')
end

# SHOW
# Show a single footyteam
get '/footyteams/:id' do
    @footyteam = Footyteam.find params[:id]
    erb :footyteams_show
end

# EDIT
# Pre-filled form for updating a footyteam
get '/footyteams/:id/edit' do
    @footyteam = Footyteam.find params[:id]
    erb :footyteams_edit
end

# UPDATE
# Update a footyteam with the user's form data
post '/footyteams/:id' do
    footyteam = Footyteam.find params[:id]
    footyteam.name = params[:name]
    footyteam.family = params[:family]
    footyteam.image = params[:image]
    footyteam.save
    redirect to("/footyteams/#{ params[:id] }") # GET /footyteams/17 SHOW
end

# DESTROY
# Delete a footyteam from the database
get '/footyteams/:id/delete' do
    footyteam = Footyteam.find params[:id]
    footyteam.destroy
    redirect to('/footyteams')
end

# players CRUD #######################

# INDEX
get '/players' do
    @players = Player.all
    erb :players_index
end 

# NEW
# Blank form for a new footyteam
get '/players/new' do
    erb :players_new
end

# CREATE
post '/players' do
    player = Player.new
    player.name = params[:name]
    player.image = params[:image]
    player.save
    redirect to("/players/#{ player.id }")
end

# SHOW
# Show a single player
get '/players/:id' do
    @player = Player.find params[:id]
    erb :players_show
end

# EDIT
get '/players/:id/edit' do
    @player = Player.find params[:id]
    erb :players_edit
end

# UPDATE
post '/players/:id' do
    player = Player.find params[:id]
    player.name = params[:name]
    player.image = params[:image]
    player.save
    redirect to("/players/#{ player.id }")
end

# DESTROY
get '/players/:id/delete' do
    player = Player.find params[:id]
    player.destroy
    redirect to('/players')
end
