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

#individal team page
get '/teams/:id' do
    teams = query_db "SELECT * FROM nba_teams WHERE id=#{params[:id]}"
    @team = teams.first
    erb :teams_show
end




def query_db (sql_statement)
    puts sql_statement
    db = SQLite3::Database.new "database.sqlite3"
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results 
end