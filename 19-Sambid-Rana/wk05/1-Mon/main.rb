require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR) #log standard error

# class Player inherits from ActiveRecord::Base i.e access to sqlite3 and database
# convention - class name should be singular word of the plural table name from database
class Player < ActiveRecord::Base
end
class Club < ActiveRecord::Base
end

get '/' do
    
    erb :home
end

#Index - list of players
get '/players/list' do 
    @players = Player.all

    erb :players_list
end






#Add Player
get '/players/list/add' do

    erb :players_add
end

#Add player respone
post '/players/list' do

    player = Player.new
    player.name = params[:name]
    player.age = params[:age]
    player.nationality = params[:nationality]
    player.position = params[:position]
    player.goals_scored = params[:goals_scored]
    player.image = params[:image]
    player.save

    redirect to('/players/list')

end

#Show player detail
get "/players/list/:id" do
    @player = Player.find params[:id]
    erb :players_details
end

#Edit player details
get "/players/list/:id/edit" do
    @player = Player.find params[:id]
    erb :players_edit
end

post "/players/list/:id" do
    player = Player.find params[:id]
    player.name = params[:name]
    player.age = params[:age]
    player.nationality = params[:nationality]
    player.position = params[:position]
    player.goals_scored = params[:goals_scored]
    player.image = params[:image]

    player.save

    redirect to("/players/list/#{ player.id }")
end

#delete player

get "/players/list/:id/delete" do
    player = Player.find params[:id]
    player.destroy
    redirect to("/players/list")
end


#########################################

#Club list
get '/clubs' do 
    @clubs = Club.all

    erb :clubs_list

end 

#add club
get "/clubs/add" do
    erb :clubs_add
end

post "/clubs" do

    club = Club.new
    club.club_name = params[:club_name]
    club.player = params[:player]
    club.image_logo = params[:image_logo]
    club.save

    redirect to('/clubs')

end

#show club detail

get "/clubs/:id" do
    @club = Club.find params[:id]
    erb :clubs_details
end

#edit

get "/clubs/:id/edit" do
    @club = Club.find params[:id]
    erb :clubs_edit

end

post "/clubs/:id" do
    club = Club.find params[:id]
    club.club_name = params[:club_name]
    club.image_logo = params[:image_logo]

    club.save
    redirect to("/clubs/#{ club.id }")

end

#delete

get "/clubs/:id/delete" do
    club = Club.find params[:id]
    club.destroy
    redirect to("/clubs") 

end