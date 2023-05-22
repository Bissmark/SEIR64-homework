require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

# Configuration 
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional - let's us see the SQL in terminal
ActiveRecord::Base.logger = Logger.new(STDERR)


# -----------------------------------
# MODELS - create interaction between Ruby and database
# TO DO - ADD ANIME AFTER
# -----------------------------------
class Studio < ActiveRecord::Base
end

class Anime < ActiveRecord::Base
end


# STUDIO ##############################

# -----------------------------------
# HOME PAGE - intro page
# -----------------------------------
get '/' do
    erb :home
end


# -----------------------------------
# INDEX - summary
# -----------------------------------
get '/studios' do
    @studios = Studio.all
    erb :studios_index
end


# -----------------------------------
# CREATING A NEW STUDIO  AND POSTING
# -----------------------------------
# NEW - add new dish. Blank form. Must be above :id as error in sinatra will read '/new' as id.
get '/studios/new' do
    erb :studios_new
end

# CREATE - create a post request. Send to database. Insert user's form data into the database
post '/studios' do
    studio = Studio.new
    studio.name = params[:name]
    studio.founders = params[:founders]
    studio.image = params[:image]
    studio.save
    redirect to("/studios")
end 


# -----------------------------------
# SHOW - shows individual dishes. Id is the unique identifier
# -----------------------------------
get '/studios/:id' do
    # grabs details of dish with unique id and
    @studio = Studio.find params[:id]
    erb :studios_show
end


# -----------------------------------
# EDIT database + UPDATE (post)
# -----------------------------------
get '/studios/:id/edit' do
    @studio = Studio.find params[:id]
    erb :studios_edit
end

# UPDATE
post '/studios/:id' do
    studio = Studio.find params[:id]
    studio.name = params[:name]
    studio.founders = params[:founders]
    studio.image = params[:image]
    studio.save
    redirect to("/studios/#{params[:id]}")
  end
  

# -----------------------------------
# DELETE - remove entry from database
# -----------------------------------
get '/studios/:id/delete' do
    studio = Studio.find params[:id]
    studio.destroy
    redirect to '/studios'
end 


# ANIME ##############################

# -----------------------------------
# INDEX - summary
# -----------------------------------

get '/animes' do
    @animes = Anime.all
    erb :animes_index
end


# -----------------------------------
# CREATING A NEW STUDIO  AND POSTING
# -----------------------------------
# NEW
get '/animes/new' do
    erb :animes_new
end

# CREATE
post '/animes' do
    anime = Anime.new
    anime.name = params[:name]
    anime.description = params[:description]
    anime.image = params[:image]
    anime.save
    redirect to('/animes')
end


# -----------------------------------
# SHOW
# -----------------------------------
get '/animes/:id' do
    @anime = Anime.find params[:id]
    erb :animes_show
end


# -----------------------------------
# EDIT database + UPDATE (post)
# -----------------------------------
# EDIT
get '/animes/:id/edit' do
    @anime = Anime.find params[:id]
    erb :animes_edit
end

# UPDATE
post '/animes/:id' do
    anime = Anime.find params[:id]
    anime.name = params[:name]
    anime.description = params[:description]
    anime.image = params[:image]
    anime.save
    redirect to("/animes/#{ anime.id }")
end


# -----------------------------------
# DELETE - remove entry from database
# -----------------------------------
get '/animes/:id/delete' do
    anime = Anime.find params[:id]
    anime.destroy
    redirect to '/animes'
end