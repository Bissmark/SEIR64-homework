require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX
# Show all the Formula 1 Cars
get '/formula_1' do
    @formula_1 = query_db "SELECT * FROM formula_1"
    erb :formula_1_index
end

# NEW
# Blank form for a new formula_1
get '/formula_1/new' do
    erb :formula_1_new
end

# Create
# Insert the user's form data into the database

post '/formula_1' do
    query_db "INSERT INTO formula_1 (model, team, image) VALUES ('#{ params[:model] }', '#{ params[:team] }', '#{ params[:image] }')"
    redirect to('/formula_1') # GET /formula_1
end

# SHOW
get '/formula_1/:id' do
    formula_1 = query_db "SELECT * FROM formula_1 WHERE id=#{ params[:id] }"
    @car = formula_1.first # Extract the single formula 1 hash from the array of formula 1 cars
    erb :formula_1_show
end

# Edit
# Pre-filled form for updating a formula_1 car
get '/formula_1/:id/edit' do  
    formula_1 = query_db "SELECT * FROM formula_1 WHERE id=#{ params[:id] }"
    @car = formula_1.first # Extract the single formula 1 hash from the array of formula 1 cars
    erb :formula_1_edit
end

# UPDATE
# Update a formula_1 with the user's form data
post '/formula_1/:id' do
    query_db "UPDATE formula_1 SET model='#{ params[:model] }', team='#{ params[:team] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/formula_1/#{ params[:id] }") 
 end

 #Destroy
 get '/formula_1/:id/delete' do
    query_db "DELETE FROM formula_1 WHERE id =#{ params[:id] }"
    redirect to('/formula_1')
 end
 
def query_db(sql_statement)
    puts sql_statement 
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end