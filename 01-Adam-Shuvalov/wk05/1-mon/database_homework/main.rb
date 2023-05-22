require "sinatra"
require "sinatra/reloader"
require "active_record"

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Director < ActiveRecord::Base
end

class Movie < ActiveRecord::Base
end

# HOME
get "/" do
    erb :home
end

# INDEX
get "/directors" do
    @directors = Director.all
    erb :directors_index
end

# NEW
get "/directors/new" do
    erb :directors_new
end

# CREATE 
post "/directors" do
    director = Director.new
    director.name = params[:name]
    director.nationality = params[:nationality]
    director.image = params[:image]
    director.save
    redirect to("/directors")
end

# SHOW
get "/directors/:id" do
    @director = Director.find params[:id]
    erb :directors_show
end

# EDIT 
get "/directors/:id/edit" do
    @director = Director.find params[:id]
    erb :directors_edit
end

# UPDATE
post "/directors/:id" do
    director = Director.find params[:id]
    director.name = params[:name]
    director.nationality = params[:nationality]
    director.image = params[:image]
    director.save
    redirect to("/directors/#{params[:id]}")

end

# DESTROY
get "/directors/:id/delete" do
    director = Director.find params[:id]
    director.destroy
    redirect to("/directors")
end

# MOVIES

# INDEX
get "/movies" do
    @movies = Movie.all
    erb :movies_index
end

# NEW
get "/movies/new" do
    erb :movies_new
end

# CREATE 
post "/movies" do 
    movie = Movie.create(name: params[:name], plot: params[:plot], year: params[:year], poster: params[:poster])
# tested .create method instead of .new & .save // lots less code
    redirect to("/movies")
end

# SHOW
get "/movies/:id" do
    @movie = Movie.find params[:id]
    erb :movies_show
end

# EDIT 
get "/movies/:id/edit" do
    @movie = Movie.find params[:id]
    erb :movies_edit
end

# UPDATE
post "/movies/:id" do
    movie = Movie.find params[:id]
    movie.name = params[:name]
    movie.plot = params[:plot]
    movie.year = params[:year]
    movie.poster = params[:poster]
    movie.save
    redirect to("/movies/#{params[:id]}")
end

# DESTROY
get "/movies/:id/delete" do
    movie = Movie.find params[:id]
    movie.destroy
    redirect to("/movies")
end

