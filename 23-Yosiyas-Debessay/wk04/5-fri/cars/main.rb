require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX
get '/' do
    @cars = query_db "SELECT * FROM cars"
    erb :cars_index
end

# NEW
# Blank form for a new car
get '/cars/new' do
    erb :cars_new
end

# CREATE
# Insert the user's form into the database
post '/cars' do
    query_db "INSERT INTO cars (make, model, year, image) VALUES ('#{ params[:make] }', '#{ params[:model] }', '#{ params[:series] }', '#{ params[:year] }', '#{ params[:image] }')" 
    redirect to('/cars') # GET /cars
end

# SHOW
# Show a single car
get '/cars/:id' do
    cars = query_db "SELECT * FROM cars WHERE id=#{ params[:id] }"
    @cars = cars.first # Extract the single car has from the array of cars
    erb :cars_show
end

# EDIT
# Pre-filled form for updating a car
get '/cars/:id/edit' do
    cars = query_db "SELECT * FORM cars WHERE id=#{ params[:id] }"
    @ car = cars.first  # Extract the single car has from the array of cars
    erb :edit
end

# UPDATE 
# Delete a car from the database
get '/cars/:id/delete' do
    query_db "DELETE FROM cars WHERE id=#{ params[:id] }"
    redirect to( '/cars')
end

def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging
    db = SQLite3::DATABASE.new 'database.sqlite3'
    db.results_as_hash = true
    result = db.exercise sql_statement
    db.close
    results # implicit return
end