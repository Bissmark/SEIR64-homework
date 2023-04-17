require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

get '/items' do
    @items = query_db "SELECT * FROM items"
    erb :items
end

get '/items/new' do
    erb :items_new
end

# Create new database item with values from input fields
post '/items' do
    query_db "INSERT INTO items (name, genre, played, image) VALUES ('#{ params[:name]}', '#{ params[:genre] }', '#{ params[:played] }', '#{ params[:image] }')"
    redirect to('/items')
end

get '/items/search' do # Why does this not work if this is moved below the /items/:id code block (it executes that code block/ditty instead)
    erb :items_search
end

# Get items based on input fields being filled in or not
post '/items/search_results' do
    if params[:genre].empty?
        @items = query_db "SELECT * FROM items WHERE played='#{ params[:played] }'"
        
    elsif params[:played].empty?
        @items = query_db "SELECT * FROM items WHERE genre='#{ params[:genre] }'"
        
    else
        @items = query_db "SELECT * FROM items WHERE genre='#{ params[:genre] }' AND played='#{ params[:played] }'"
    end


    erb :items_search_results
end

get '/items/:id' do 
    @item = get_item_with_id params[:id]
    erb :items_show
end

get '/items/:id/edit' do
    @item = get_item_with_id params[:id]
    erb :items_edit
end

# Update existing database item
post '/items/:id' do
    query_db "UPDATE items SET name='#{ params[:name] }', genre='#{ params[:genre] }', played='#{ params[:played] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/items/#{ params[:id] }")
end

# Delete database item
get '/items/:id/delete' do
    query_db "DELETE FROM items WHERE id=#{ params[:id] }"
    redirect to('/items')
end

# Access database
def query_db(sql_statement)
    puts sql_statement # debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results 
end

# Query database via id
def get_item_with_id(id_number)
    items = query_db "SELECT * FROM items WHERE id='#{ id_number }'"
    items.first
end