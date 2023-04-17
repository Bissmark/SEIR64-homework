require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# -----------------------------------
# HOME PAGE - intro page
# -----------------------------------
get '/' do
    erb :home
end

# -----------------------------------
# FAQ
# -----------------------------------
get '/dishes/faq' do
    erb :dishes_faq
end

# -----------------------------------
# INDEX - summary of all dishes
# -----------------------------------
get '/dishes' do
    # grab dish info from the dp and display all
    # put a hat and make it a global superstar!
    @dishes = query_db "SELECT * FROM dishes ORDER BY name ASC;" # sql_statement
    erb :dishes_index
end

# -----------------------------------
# CREATING A NEW DISH + POSTING
# -----------------------------------
# NEW - add new dish. Blank form. Must be above :id as error in sinatra will read '/new' as id.
get '/dishes/new' do
    erb :dishes_new
end

# CREATE - create a post request. Send to database. Insert user's form data into the database
post '/dishes' do
    # insert into database
    query_db "INSERT INTO dishes (name, category, description, image) VALUES ('#{ params[:name] }', '#{ params[:category] }', '#{ params[:description] }', '#{ params[:image] }');"
    # send to another page
    redirect to('/dishes')
end 

# -----------------------------------
# SHOW - shows individual dishes. Id is the unique identifier
# -----------------------------------
get '/dishes/:id' do
    # grabs details of dish with unique id and
    dishes = query_db "SELECT * FROM dishes WHERE id=#{ params[:id] }"
    # Extract the only (first) hash
    @dish = dishes.first
    erb :dishes_show
end

# -----------------------------------
# EDIT database
# -----------------------------------
get '/dishes/:id/edit' do
    # find the data using unique id
    dishes = query_db "SELECT * FROM dishes WHERE id=#{ params[:id] }"
    @dish = dishes.first
    erb :dishes_edit
end

# UPDATE - update dish with users new form data
post '/dishes/:id' do
    query_db "UPDATE dishes SET name='#{ params[:name] }', category='#{ params[:category] }', description='#{ params[:description] }', image=' #{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to ("/dishes/#{ params[:id] }")
end

# -----------------------------------
# DELETE - remove entry from database
# -----------------------------------
get '/dishes/:id/delete' do
    query_db "DELETE FROM dishes WHERE id=#{ params[:id] }"
    redirect to '/dishes'
end 

# -----------------------------------
# FUNCTION - to grab data from the database. Create function to prevent code duplication
# -----------------------------------
def query_db(sql_statement)
    puts sql_statement # debugging in terminal
    db = SQLite3::Database.new 'database.sqlite3' 
    db.results_as_hash = true # print results as hash
    results = db.execute sql_statement
    db.close # must close the database every time after use
    results # implicit return 
end