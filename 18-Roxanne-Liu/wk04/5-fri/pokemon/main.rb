require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
   erb :home
end


get '/pokemons' do
    @pokemons = query_db "SELECT * FROM pokemons"
    erb :pokemons_index
end    


get '/pokemons/new' do
    erb :pokemons_new
end

post '/pokemons' do
    query_db "INSERT INTO pokemons (name, type, gender, weight, height, image) VALUES ('#{ params[:name] }', '#{ params[:type] }', '#{ params[:gender] }', '#{ params[:weight] }', '#{ params[:height] }', '#{ params[:image] }')"
    redirect to('/pokemons') 
end

get '/pokemons/favorites' do 
    @pokemons = query_db "SELECT * FROM pokemons WHERE favorite='TRUE'"
    erb :pokemons_favorite
end

post '/pokemons/:id/favorite' do
    query_db "UPDATE pokemons SET favorite='TRUE' WHERE id=#{ params[:id] }" 
    redirect to('/pokemons/favorites') 
end

get '/pokemons/:id' do
    pokemons = query_db "SELECT * FROM pokemons WHERE id=#{ params[:id] }" 
    @pokemon = pokemons.first 
    erb :pokemons_show
end

get '/pokemons/:id/edit' do
    pokemons = query_db "SELECT * FROM pokemons WHERE id=#{ params[:id] }"
    @pokemon = pokemons.first 
    erb :pokemons_edit
end

post '/pokemons/:id' do
    query_db "UPDATE pokemons SET name='#{ params[:name] }', type='#{ params[:type] }', gender='#{ params[:gender] }', weight='#{ params[:weight] }', height='#{ params[:height] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }" 
    redirect to("pokemons/#{ params[:id] }") 
end    

get '/pokemons/:id/delete' do
    query_db "DELETE FROM pokemons WHERE id=#{ params[:id] }"
    redirect to('/pokemons')
end


def query_db(sql_statement)
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end