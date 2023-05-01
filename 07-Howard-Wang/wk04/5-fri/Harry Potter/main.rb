require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX
# SHOW YOU ALL HARRY POTTER CHARACTERS
get '/harrypotter' do
    @harrypotter = query_db "SELECT * FROM harrypotter"
    erb :harrypotter_index
end

# NEW ACTION
# BLANK FORM FOR A NEW CHARACTER
get '/harrypotter/new' do
    erb :harrypotter_new
end

# CREATE   
# INSERT THE USER'S FORM DATA INTO THE DATABASE
post '/harrypotter' do
    query_db"INSERT INTO harrypotter (name, house, bloodtype) VALUES ('#{params[:name]}', '#{params[:house]}', '#{params[:bloodtype]}')"
    redirect to('/harrypotter') #GET /harrypotter
end

# SHOW SINGLE BUTTERFLY
get '/harrypotter/:id' do
    harrypotter = query_db "SELECT * FROM harrypotter WHERE id=#{ params[:id]}" #returns array
    @character = harrypotter.first #extract the single character hash from the array of characters
    erb :harrypotter_show
end

# EDIT
# Pre-filled form for updating a character
get '/harrypotter/:id/edit' do
    harrypotter = query_db "SELECT * FROM harrypotter WHERE id=#{ params[:id]}" #returns array
    @character = harrypotter.first #extract the single character hash from the array of characters
    erb :harrypotter_edit
end

# UPDATE A CHARACTER WITH A USER'S FORM DATA
post '/harrypotter/:id' do
    query_db "UPDATE harrypotter SET name='#{ params[:name] }', house='#{ params[:house] }', bloodtype='#{ params[:bloodtype] }' WHERE id=#{ params[:id] }"
    redirect to("/harrypotter/#{ params[:id] }") 
 end

# DESTORY
# DELETE A CHARACTER FROM THE DATABASE
get '/harrypotter/:id/delete' do
    query_db "DELETE FROM harrypotter WHERE id=#{ params[:id]}"
    redirect to('/harrypotter')
end


def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end