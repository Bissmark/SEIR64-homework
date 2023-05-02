require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# index
get '/pastas' do 
    @pastas = query_db "SELECT * FROM pastas"
    erb :pastas_index
end

# new
get '/pastas/new' do
    erb :pastas_new
end

#create
post '/pastas' do
    query_db "INSERT INTO pastas (name, region, image) VALUES ('#{ params[:name] }', '#{ params[:region] }', '#{ params[:image] }')" 
    redirect to('/pastas')
end

# # show
get '/pastas/:id' do 
    pastas = query_db "SELECT * FROM PASTAS WHERE id=#{ params[:id] }"
    @pasta = pastas.first 
    erb :pastas_show
end

# #edit
get '/pastas/:id/edit' do
    @pasta = query_db "SELECT * FROM PASTAS WHERE id=#{ params[:id] }"
    @pasta = @pasta.first 
    erb :pastas_edit
end

# #update
post '/pastas/:id' do
   query_db "UPDATE pastas SET name='#{ params[:name]}', region='#{ params[:region]}', image='#{ params[:image]}' WHERE id=#{ params[:id]}" 
   redirect to ("/pastas/#{ params[:id]}")
end

# #destroy
get '/pastas/:id/delete' do    
    query_db "DELETE FROM pastas WHERE id=#{ params[:id] }"
    redirect to ('/pastas')
end

def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end