require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    "home page coming soon"
    erb :home
end

# INDEX
get '/games' do
    @games = query_db "SELECT * FROM games"
    erb :games_index
end

# NEW
get '/games/new' do
    erb :games_new
end

# CREATE
post '/games' do
    query_db "INSERT INTO games (name, genre, image) VALUES ('#{ params[:name] }', '#{ params[:genre] }', '#{ params[:image] }')"
    redirect to('/games') #GET games
end

# SHOW
get '/games/:id' do
    games = query_db "SELECT * FROM games WHERE id=#{ params[:id] }"
    @game = games.first
    erb :games_show
end

# EDIT
get '/games/:id/edit' do
    games = query_db "SELECT * FROM games WHERE id=#{ params[:id] }"
    @game = games.first
    erb :games_edit
end

# UPDATE
post '/games/:id' do
    query_db "UPDATE games SET name='#{ params[:name] }', genre='#{ params[:genre] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/games/#{ params[:id] }")
end

# DESTROY
get '/games/:id/delete' do
    query_db "DELETE FROM games WHERE id=#{ params[:id] }"
    redirect to('/games')
end

def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end