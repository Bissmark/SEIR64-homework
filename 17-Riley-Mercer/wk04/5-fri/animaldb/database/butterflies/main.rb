# Put as much logic in the main file, to keep out of various views.


require 'sinatra'
require 'sinatra/reloader' #Sinatra GEM
require 'sqlite3' #Sinatra GEM

# method 'route' action
get '/' do
    erb :home
end

# INDEX
# Show you all the butterflies
get '/butterflies' do
    @butterflies = query_db "SELECT * FROM butterflies"
    # creates an INSTANCE variable called @butterflies
    erb :butterflies_index
    #passes data out to butterflies index?
end

# NEW
# Blank form for a new butterfly
get '/butterflies/new' do
    erb :butterflies_new
end

# CREATE
# Insert the user's form data into the database
post '/butterflies' do
    query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
    # The above is the CREATE Part of the CRUD system. 
    # This inserts records into the tables established in the SQL file
    redirect to('/butterflies') # GET /butterflies
end

# SHOW
# Show a single butterfly
get '/butterflies/:id' do #dynamic path
    butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
    # This is the READ part of the CRUD system. Fildered by id
    @butterfly = butterflies.first # Extract the single butterfly hash from the array of butterflies
    erb :butterflies_show
end

# EDIT
# Pre-filled form for updating a butterfly
get '/butterflies/:id/edit' do
    butterflies = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
    @butterfly = butterflies.first # Extract the single butterfly hash from the array of butterflies
    erb :butterflies_edit
end

# UPDATE
# Update a butterfly with the user's form data
post '/butterflies/:id' do
   query_db "UPDATE butterflies SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
   # this is the UPDATE part. Setting name = name etc
   redirect to("/butterflies/#{ params[:id] }") # GET /butterflies/17 SHOW
end

# DESTROY
# Delete a butterfly from the database
get '/butterflies/:id/delete' do
    query_db "DELETE FROM butterflies WHERE id=#{ params[:id] }"
    redirect to('/butterflies')
end

def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results # implicit return
end