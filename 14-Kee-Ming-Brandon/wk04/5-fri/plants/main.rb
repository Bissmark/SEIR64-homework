require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# Home
get '/' do
    erb :home
end

# INDEX
get '/plants' do
    @plants = query_db "SELECT * FROM plants"
    erb :plants_index
end

# ADD NEW
get '/plants/new' do
    erb :plants_new
end

# CREATE NEW
post '/plants' do
    query_db "INSERT INTO plants (name, family, light, humidity, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:light] }', '#{ params[:humidity] }', '#{ params[:image] }')"
    redirect to('/plants')
end

# Family list
get '/families' do
    @plants = query_db "SELECT * FROM plants"
    erb :families_list
end

# Family page
get '/families/:family' do
    @plants = query_db "SELECT * FROM plants WHERE family='#{ params[:family] }'"
    @plant = @plants.first
    erb :plants_family
end

# SHOW
get '/plants/:id' do
    plants = query_db "SELECT * FROM plants WHERE id=#{ params[:id] }"
    @plant = plants.first
    erb :plants_show
end

# EDIT 
get '/plants/:id/edit' do 
    plants = query_db "SELECT * FROM plants WHERE id=#{ params[:id] }"
    @plant = plants.first 
    erb :plants_edit
end

# UPDATE
post '/plants/:id' do
    query_db "UPDATE plants SET name='#{ params[:name] }', family='#{ params[:family] }', light='#{ params[:light] }', humidity='#{ params[:humidity] }',  image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/plants/#{ params[:id] }")
end

# DESTROY
get '/plants/:id/delete' do
    query_db "DELETE FROM plants WHERE id=#{ params[:id] }"
    redirect to('/plants')
end

def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'   # open
    db.results_as_hash = true                       # create hash
    results = db.execute sql_statement              # run statement
    db.close                                        # close
    results # implicit return
end