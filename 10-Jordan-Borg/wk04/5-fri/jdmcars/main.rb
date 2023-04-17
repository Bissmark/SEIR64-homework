require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX
get '/jdmcars' do
    @jdmcars = query_db "SELECT * FROM jdmcars"
    erb :jdmcars_index
end

# NEW 
# Blank form for a new jdmcars
get '/jdmcars/new' do
    erb :jdmcars_new
end

# CREATE
# Insert the user's form data into the database
post '/jdmcars' do
    query_db "INSERT INTO jdmcars (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
    redirect to ('/jdmcars') # GET /jdmcars
end

# SHOW
# show a single jdmcars based on the I.D
get '/jdmcars/:id' do
    @jdmcar = query_db "SELECT * FROM jdmcars WHERE id=#{ params[:id] }" # this returns an array
    @jdmcar = @jdmcar.first # extract the single jdmcars hash from the array of jdmcars
    # get the jdmcars from the Database
    erb :jdmcars_show
end

# EDIT
# Pre-filled form for updating a jdmcars
get '/jdmcars/:id/edit' do
    @jdmcar = query_db "SELECT * FROM jdmcars WHERE id=#{ params[:id] }" # this returns an array
    @jdmcar = @jdmcar.first # extract the single jdmcars hash from the array of jdmcars
    erb :jdmcars_edit
end

# UPDATE
# Update a jdmcars with the user's form data
post '/jdmcars/:id' do
    query_db "UPDATE jdmcars SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/jdmcars/#{ params[:id] }") # GET /jdmcars/17 SHOW
 end

# DELETE/DESTROY
# Delete a jdmcars from the database
get '/jdmcars/:id/delete' do
    query_db "DELETE FROM jdmcars WHERE id=#{ params[:id] }"
    redirect to('/jdmcars')
end

def query_db(sql_statement)
    puts sql_statement # Optional but nice of debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results # implicit return
end
