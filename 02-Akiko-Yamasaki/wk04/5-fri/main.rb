require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


get '/' do
    erb :home
end

#INDEX shows list of what is  in the playlist database
get '/playlist' do
    db = SQLite3::Database.new("database.sqlite3")
    db.results_as_hash = true
    @playlist = db.execute "SELECT * FROM playlist"
    db.close
    erb :playlist_index
end
 
# # #new/create blank form for a new song added to the playlist
get '/playlist/new' do
    erb :playlist_new
end

#create and insert the new data from form submission into the DB
post '/playlist' do
    db = SQLite3::Database.new("database.sqlite3")
    db.results_as_hash = true
    sql = "INSERT INTO playlist (artist, title, image) VALUES('#{ params[:artist] }', '#{ params[:title]}', '#{ params[:image]}')"
    db.execute(sql)
    db.close
    redirect to'/playlist'
end
# show info on each song
get '/playlist/:id' do
    db = SQLite3::Database.new("database.sqlite3")
    db.results_as_hash = true
    @song = db.execute("SELECT * FROM playlist WHERE id=#{ params[:id] };").first
    db.close
    erb :playlist_show
end

#Edit page prefilled form to update date on a song
get '/playlist/:id/edit' do
    db = SQLite3::Database.new("database.sqlite3")
    db.results_as_hash = true
    @song = db.execute("SELECT * FROM playlist WHERE id=#{ params[:id] };").first
    db.close
    erb :playlist_edit
end

#update data on a song with new data from the edit submission
#sinatra doesnt know this ditty why?
post '/playlist/:id' do
    db = SQLite3::Database.new("database.sqlite3")
    db.results_as_hash = true
    sql = "UPDATE playlist SET artist ='#{ params[:artist]}', title ='#{ params[:title]}', image='#{ params[:image]}' WHERE id == #{ params[:id] }"
    db.execute(sql)
    db.close
    redirect "/playlist/#{params[:id]}"
end

#destroy action/delete a song from the list/DB
get '/playlist/:id/delete' do
    db = SQLite3::Database.new("database.sqlite3")
    db.results_as_hash = true
    db.execute"DELETE FROM playlist WHERE id=#{ params[:id] }"
    db.close
    # redirect "/playlist"
    erb :playlist_delete
end



# def query_db(sql_statement)
#     puts sql_statement
#     db = SQLite3::Database.new("database.sqlite3")
#     db.results_as_hash = true
#     results = db.execute sql_statement
#     db.close
#     results
# end