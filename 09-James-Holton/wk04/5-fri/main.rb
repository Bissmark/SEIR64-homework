require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX
get '/cars' do
    @cars = query_db "SELECT * FROM cars"
    erb :cars_index
end

# NEW
get '/cars/add' do
    erb :cars_add
end

# CREATE
post '/cars' do
    query_db "INSERT INTO cars (make, model, body, color, year, kilometres, transmission, engine, image) VALUES ('#{ params[:make] }', '#{ params[:model] }', '#{ params[:body] }', '#{ params[:color] }', '#{ params[:year] }', '#{ params[:kilometres] }', '#{ params[:transmission] }', '#{ params[:engine] }', '#{ params[:image] }')"
    redirect to('/cars')
end

# SHOW
get '/cars/:id' do
    cars = query_db "SELECT * FROM cars WHERE id=#{ params[:id] }"
    @car = cars.first
    erb :cars_show
end

# EDIT
get '/cars/:id/edit' do
    cars = query_db "SELECT * FROM cars WHERE id=#{ params[:id] }"
    @car = cars.first
    erb :cars_edit
end

# UPDATE
post '/cars/:id' do
    query_db "UPDATE cars SET make='#{ params[:make] }', model='#{ params[:model] }', body='#{ params[:body] }', color='#{ params[:color] }', year='#{ params[:year] }', kilometres='#{ params[:kilometres] }', transmission='#{ params[:transmission] }', engine='#{ params[:engine] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/cars/#{ params[:id] }")
end

# DESTROY
get '/cars/:id/delete' do
    query_db "DELETE FROM cars WHERE id=#{ params[:id] }"
    redirect to('/cars')
end

def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end 