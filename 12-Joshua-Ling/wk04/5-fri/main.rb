require "sinatra"
require "sinatra/reloader"
require "sqlite3"

get "/" do
    @flower = db_query "SELECT * FROM flowers"
    erb :home
end

post "/" do
    db_query "INSERT INTO flowers (name, season, lifespan) VALUES ('#{params[:name]}', '#{params[:season]}', '#{params[:lifespan]}')"
    redirect to("/")
end

get "/flowers/new" do
    erb :flowers_new
end

get "/flowers/:id" do
    flowers = db_query "SELECT * FROM flowers WHERE id=#{params[:id]}"
    @flower = flowers.first
    erb :flowers_show
end 

get "/flowers/:id/edit" do
    flowers = db_query "SELECT * FROM flowers WHERE id=#{params[:id]}"
    @flower = flowers.first
    erb :flowers_edit
end

post "/flowers/:id" do 
    db_query "UPDATE flowers SET name='#{params[:name]}', season='#{params[:season]}', lifespan='#{params[:lifespan]}' WHERE id=#{params[:id]}"
    redirect to("/flowers/#{params[:id]}")
end

get "/flowers/:id/delete" do 
    db_query "DELETE FROM flowers WHERE id=#{params[:id]}"
    redirect to ('/')
end

def db_query query
    puts query
    db = SQLite3::Database.new "database.sqlite3"
    db.results_as_hash = true
    results = db.execute query
    db.close
    results
end