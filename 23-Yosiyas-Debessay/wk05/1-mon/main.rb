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
class Team < ActiveRecord::Base
end

class Player < ActiveRecord::Base
end

get '/' do
    erb :home
end

# INDEX
# Show you all the teams
get '/teams' do
    @teams = Team.all
    erb :teams_index
end

# NEW
# Blank form for a new team
get '/teams/new' do
    erb :teams_new
end

# CREATE
# Insert the user's form data into the database
post '/teams' do
    team = Team.new
    team.name = params[:name]
    team.country = params[:family]
    team.image = params[:image]
    team.save
    redirect to("/teams/#{ team.id }")
end

# SHOW
# Show a single team
get '/teams/:id' do
    @team = Team.find params[:id]
    erb :teams_show
end

# EDIT
# Pre-filled form for updating a team
get '/teams/:id/edit' do
    @team = Team.find params[:id]
    erb :teams_edit
end

# UPDATE
# Update a team with the user's form data
post '/teams/:id' do
    team = Team.find params[:id]
    team.name = params[:name]
    team.family = params[:family]
    team.image = params[:image]
    team.save
    redirect to("/teams/#{ params[:id] }") # GET /teams/17 SHOW
end

# DESTROY
# Delete a team from the database
get '/teams/:id/delete' do
    team = Team.find params[:id]
    team.destroy
    redirect to('/teams')
end

# players CRUD #############################################

# INDEX
get '/players' do
    @players = Player.all
    erb :players_index
end

# NEW
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