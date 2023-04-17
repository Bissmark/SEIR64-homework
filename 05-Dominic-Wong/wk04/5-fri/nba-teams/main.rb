require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

#homepage
get '/' do
    erb :home
end

#index page
get '/teams' do
    @teams = query_db "SELECT * FROM nba_teams"
    erb :teams_index
end

#Create
get '/teams/new' do
    erb :teams_new
end

post '/teams' do
    params.inspect
    query_db "INSERT INTO nba_teams (name, city, image) VALUES ('#{params[:name]}', '#{params[:city]}', '#{params[:image]}')"
    redirect to('/teams')
end

#individal team page
get '/teams/:id' do
    teams = query_db "SELECT * FROM nba_teams WHERE id=#{params[:id]}"
    @team = teams.first
    erb :teams_show
end

# update team page
get '/teams/:id/update' do
    teams = query_db "SELECT * FROM nba_teams WHERE id=#{params[:id]}"
    @team = teams.first
    erb :teams_update
end 

post '/teams/:id' do
    query_db "UPDATE nba_teams SET name='#{params[:name]}', city='#{params[:city]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
    redirect to("/teams/#{params[:id]}")
end

# DELETE
get '/teams/:id/delete' do
    query_db "DELETE FROM nba_teams WHERE id=#{params[:id]}"
    redirect to('/teams')
end

def query_db (sql_statement)
    puts sql_statement
    db = SQLite3::Database.new "database.sqlite3"
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results 
end