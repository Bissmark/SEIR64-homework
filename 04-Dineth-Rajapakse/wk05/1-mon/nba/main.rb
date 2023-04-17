require 'sinatra'   #sinatra for our web server
require 'sinatra/reloader' # so we dont have to keep reloading our server
require 'active_record'   

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

#Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

class Team < ActiveRecord::Base
end 


get '/' do
    erb :home
end 

#INDEX

get '/teams' do
    @teams = Team.all 
    erb :teams_index
end 

#NEW - blank form for new team 
get '/teams/new' do
    erb :teams_new
end 

#CREATE 

post '/teams' do 
    team = Team.new
    team.name = params[:name]
    team.mvp = params[:mvp]
    team.image = params[:image]
    team.save
    redirect to("/teams/#{ team.id }")
end


#SHOW 
#show my teams

get '/teams/:id' do

    @team = Team.find params[:id]
    erb :teams_show
end  

#EDIT

get '/teams/:id/edit' do
    @team = Team.find params[:id]
    erb :teams_edit
end 

#UPDATE

post '/teams/:id' do
    team = Team.find params[:id]
    team.name = params[:name]
    team.mvp = params[:mvp]
    team.image = params[:image]
    team.save
    redirect to("/teams/#{ params[:id] }")
end



#DESTROY

get '/teams/:id/delete' do
    team = Team.find params[:id]
    team.destroy
    redirect to('/teams')
end 