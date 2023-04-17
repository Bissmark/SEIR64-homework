require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do 
    erb :home

end

#Shows the list of all the player #_index page - convention?
get '/player/list' do

    # @player = db.execute "SELECT * FROM football_players" #gets replaced by the function db_query
    @players = query_db "SELECT * FROM football_players"
    erb :player_list

end

#show page using [:id] after the player link has been clicked. should be extension from player/list/ 
get '/player/list/:id' do 
    players = query_db "SELECT * FROM football_players WHERE id=#{ params[:id] }" #id is coming from the placeholder
    @player = players.first #get the first element from {:id}  
    erb :player_display    
end

#add player
get '/player/add' do
    erb :player_add
end

#what to do when user clicks Add Player
post '/player/list' do 

    query_db "INSERT INTO football_players (first_name, last_name, nationality, image) VALUES ('#{params[:first_name]}', '#{params[:last_name]}', '#{params[:nationality]}', '#{params[:image]}') "

    redirect to('/player/list')
end

#edit player
get '/player/list/:id/edit' do

    players = query_db "SELECT * FROM football_players WHERE id=#{ params[:id] }"

    @player = players.first

    erb :player_edit

end
#Complete edit
post '/player/list/:id' do

    query_db "UPDATE football_players SET first_name='#{params[:first_name]}', last_name='#{params[:last_name] }', nationality='#{ params[:nationality] }', goals_scored='#{ params[:goals_scored] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"


    redirect to("/player/list/#{ params[:id] }")

end

#delete
get '/player/list/:id/delete' do

    query_db "DELETE FROM football_players WHERE id=#{ params[:id]}"
    redirect to ('/player/list')

end







def query_db (sql_statement)

    db = SQLite3::Database.new 'database.sqlite3' #a feature of sqlite3? #is creating a new sqlite3 database object that can be used to interact with an sqlite database in Ruby program
    #note: check how the syntax would be written if it was postgesql or mysql
    db.results_as_hash = true
    result = db.execute sql_statement    # this should come from the argument: eg"SELECT * FROM football_players"
    db.close
    result

end

