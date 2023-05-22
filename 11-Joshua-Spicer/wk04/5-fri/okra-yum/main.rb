require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end


get '/okra' do
    @okra = query_db "SELECT * FROM okra"
    erb :okra_index
end


get '/okra/new' do
    erb :okra_new
end

post '/okra' do
    query_db "INSERT INTO okra (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
    redirect to('/okra') 
end

get '/okra/:id' do
    okra = query_db "SELECT * FROM okra WHERE id=#{ params[:id] }"
    @okra = okra.first 
    erb :okra_show
end

get '/okra/:id/edit' do
    okra = query_db "SELECT * FROM okra WHERE id=#{ params[:id] }"
    @okra = okra.first 
    erb :okra_edit
end

post '/okra/:id' do
   query_db "UPDATE okra SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
   redirect to("/okra/#{ params[:id] }") 
end

get '/okra/:id/delete' do
    query_db "DELETE FROM okra WHERE id=#{ params[:id] }"
    redirect to('/okra')
end

def query_db(sql_statement)
    db = SQLite3::Database.new 'okra.db'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results 
end
