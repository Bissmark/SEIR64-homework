require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class NbaTeam < ActiveRecord::Base
end

class NbaPlayer < ActiveRecord::Base
end

# NBA TEAM #

# GET homepage
get '/' do
    erb :home
end

# GET all teams
get '/teams' do
    # @teams = query_db "SELECT * FROM nba_teams"
    @teams = NbaTeam.all
    erb :teams_index
end

# Create GET page
get '/teams/new' do
    erb :teams_new
end

# GET individual team
get '/teams/:id' do
    @team = NbaTeam.find params[:id]
    erb :teams_show
end

# POST create form
post '/teams' do
    team = NbaTeam.new
    team.name = params[:name]
    team.city = params[:city]
    team.image = params[:image]
    team.save
    redirect to('/teams')
end

# GET individual team's edit page
get '/teams/:id/edit' do
    # teams = query_db "SELECT * FROM nba_teams WHERE id=#{params[:id]}"
    # @team = teams.first
    @team = NbaTeam.find params[:id]
    erb :teams_edit
end 

# POST edit form
post '/teams/:id' do
    # query_db "UPDATE nba_teams SET name='#{params[:name]}', city='#{params[:city]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
    team = NbaTeam.find params[:id]
    team.name = params[:name]
    team.city = params[:city]
    team.image = params[:image]
    team.save
    redirect to("/teams/#{team.id}")
end

# DELETE
get '/teams/:id/delete' do
    # query_db "DELETE FROM nba_teams WHERE id=#{params[:id]}"
    team = NbaTeam.find params[:id]
    team.destroy
    redirect to('/teams')
end


# NBA PLAYER #

get '/players' do
    @players = NbaPlayer.all
    erb :players_index
end

get '/players/new' do
    erb :players_new
end

get '/players/:id' do
    @player = NbaPlayer.find params[:id]
    erb :players_show
end

post '/players' do
    player = NbaPlayer.new
    player.name = params[:name]
    player.image = params[:image]
    player.position = params[:position]
    player.save
    redirect to("/players")
end

get '/players/:id/edit' do
    @player = NbaPlayer.find params[:id]
    erb :players_edit
end

post '/players/:id' do
    player = NbaPlayer.find params[:id]
    player.name = params[:name]
    player.image = params[:image]
    player.position = params[:position]
    player.save
    redirect to("/players/#{player.id}")
end

get '/players/:id/delete' do
    player = NbaPlayer.find params[:id]
    player.destroy
    redirect to('/players')
end

