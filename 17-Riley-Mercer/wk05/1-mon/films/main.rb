########################## Requires ##########################
require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

########################## Configs ##########################
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

########################## Models ##########################

class Director < ActiveRecord::Base
end

class Film < ActiveRecord::Base
end

get '/' do
    erb :home
end

########################## Index & New ##########################
get '/directors' do
    @directors = Director.all
    erb :directors_index
end

get '/directors/new' do
    erb :directors_new
end

########################## Director CRUD ##########################
########################## Create ##########################
post '/directors' do
    director = Director.new
    director.name = params[:name]
    director.age = params[:age]
    director.image = params[:image]
    director.save
    redirect to ("/directors/#{director.id}") # Double quotes for interpolation
end

########################## Reveal ##########################
# 'Show' Doesn't really fit the acronym

get '/directors/:id' do
    @director = Director.find params[:id]
    erb :directors_show
end

########################## (Edit) ##########################

get '/directors/:id/edit' do
    @director = Director.find params[:id]
    erb :directors_edit
end

########################## Update ##########################
get '/directors/:id' do
    director = Director.find params[:id]
    director.name = params[:name]
    director.age = params[:age]
    director.image = params[:image]
    director.save
    redirect to("/directors/#{params[:id]}") 
end

########################## Update ##########################
get '/directors/:id/delete' do
    director = Director.find params[:id]
    director.destroy
    redirect to('directors')
end

########################## Films ##########################
########################## Index & New ##########################
get '/films' do
    @films = Film.all
    erb :films_index
end

get '/films/new' do
    erb :films_new
end

########################## Film CRUD ##########################
########################## Create ##########################
post '/films' do
    film = Film.new
    film.title = params[:title]
    film.releaseyr = params[:releaseyr]
    film.image = params[:image]
    film.save
    redirect to ("/films/#{film.id}")
end

########################## Reveal ##########################
get '/films/:id' do
    @film = Film.find params[:id]
    erb :films_show
end

########################## (Edit) ##########################

get '/films/:id/edit' do
    @film = Film.find params[:id]
    erb :films_edit
end

########################## Update ##########################
get '/films/:id' do
    film = Film.find params[:id]
    film.title = params[:title]
    film.releaseyr = params[:releaseyr]
    film.image = params[:image]
    film.save
    redirect to("/films") 
end

########################## Update ##########################
get '/films/:id/delete' do
    film = Film.find params[:id]
    film.destroy
    redirect to('/films')
end