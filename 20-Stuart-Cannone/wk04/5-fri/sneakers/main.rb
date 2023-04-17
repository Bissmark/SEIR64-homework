require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do 
    erb :home
end

get '/sneakers' do
  
    @sneakers = query_db "SELECT * FROM sneakers"
    erb :sneakers_index
end

get '/sneakers/new' do
   erb :sneakers_new
end

post '/sneakers' do
    query_db "INSERT INTO sneakers (brand, model, colourway, size, ogrelease, release, stylecode, image)  VALUES ('#{ params[:brand] }', '#{ params[:model] }', '#{ params[:colourway] }', '#{ params[:size] }','#{ params[:ogrelease] }','#{ params[:release] }','#{ params[:stylecode] }','#{ params[:image] }')"
    redirect to ('/sneakers')
end

get '/sneakers/:id' do
    sneakers = query_db "SELECT * FROM sneakers WHERE id=#{params[:id]}"
    @sneakers = sneakers.first
    erb :sneakers_show
end

get '/sneakers/:id/edit' do
    sneakers = query_db "SELECT * FROM sneakers WHERE id=#{params[:id]}"
    @sneakers = sneakers.first
    erb :sneakers_edit
end

post '/sneakers/:id' do
    query_db "UPDATE sneakers SET brand='#{ params[:brand] }', model='#{ params[:model] }', colourway='#{ params[:colourway] }', size='#{ params[:size] }',ogrelease='#{ params[:ogrelease] }', release='#{ params[:release] }', stylecode='#{ params[:stylecode] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/sneakers/#{ params[:id] }") 
 end

 get '/sneakers/:id/delete' do
    query_db "DELETE FROM sneakers WHERE id=#{ params[:id] }"
    redirect to ('/sneakers')
 end

def query_db (sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end