require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    "Home page coming soon"
    erb :home
end

#INDEX - see everything
get '/eucalypts' do
    @eucalypts = query_db "SELECT * FROM eucalypts"
    erb :eucalypts_index
end

# NEW
# blank form for a new eucalypt
get '/eucalypts/new' do
    erb :eucalypts_new
end

# CREATE
# Insert the users form data into the database
post '/eucalypts' do
    query_db "INSERT INTO eucalypts (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
    redirect to('/eucalypts')
end

#SHOW - see individual eucalypts
get '/eucalypts/:id' do
    eucalypts = query_db "SELECT * FROM eucalypts WHERE id=#{ params[:id] }" # returns array
    @eucalypt = eucalypts.first # returns the only value in the array
    erb :eucalypts_show
end

#EDIT
# Pre-filled form for updating a eucalypt
get '/eucalypts/:id/edit' do
    eucalypts = query_db "SELECT * FROM eucalypts WHERE id=#{ params[:id] }" # returns array
    @eucalypt = eucalypts.first # returns the only value in the array
    erb :eucalypts_edit
end

# UPDATE
# Update a eucalypt with the users form data
post '/eucalypts/:id' do
    query_db "UPDATE eucalypts SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/eucalypts/#{ params[:id] }")
end

# DESTROY
# Delete a eucalypt from the database
get '/eucalypts/:id/delete' do
    query_db "DELETE FROM eucalypts WHERE id=#{ params[:id] }"
    redirect to('/eucalypts')
end


def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end