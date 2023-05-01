require "sinatra"
require "sinatra/reloader"
require "sqlite3"

# CRUD
# CREATE
# READ
# UPDATE
# DELETE

get '/' do
    erb :home
end

# Main index
get "/astronomy-database" do
    @astronomy = query_db "SELECT * FROM astronomy"
    erb :astronomy_index
end

# Page for adding new item
get "/astronomy-database/new" do
    erb :astronomy_new
end

# Posts input from above to /astronomy-database & database
post "/astronomy-database" do #LEARN MORE ABOUT WHY THIS URL IS NEEDED FOR POST
    query_db "INSERT INTO astronomy (name, type, summary, image) VALUES ('#{params[:name]}', '#{params[:type]}', '#{params[:summary]}', '#{params[:image]}')"
    redirect to("/astronomy-database")
end

# Page for editing item
get "/astronomy-database/:id/edit" do
    astronomical_item = query_db "SELECT * FROM astronomy WHERE id='#{params[:id]}'"
    @astronomical_item = astronomical_item.first
    erb :astronomy_edit
end

# Posts edit input from above database
post "/astronomy-database/:id" do
    query_db "UPDATE astronomy SET name='#{params[:name]}', type='#{params[:type]}', summary='#{params[:summary]}', image='#{params[:image]}' WHERE id='#{params[:id]}'"
    redirect to("/astronomy-database/#{params[:id]}")
end

# Shows individual index item
get "/astronomy-database/:id" do
    astronomical_item = query_db "SELECT * FROM astronomy WHERE id='#{params[:id]}'"
    @astronomical_item = astronomical_item.first
    erb :astronomy_show
end

# Deletes item from db / tested using 'delete' request

delete "/astronomy-database/:id" do
    query_db "DELETE FROM astronomy WHERE id='#{params[:id]}'"
    redirect to("/astronomy-database")
end

def query_db sql_statement
    puts sql_statement #debugger
    db = SQLite3::Database.new "astronomy.sqlite3"
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results #automatically returned
end