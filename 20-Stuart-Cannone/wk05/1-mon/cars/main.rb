require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

# Tedious configuration: tomorrow Rails will do this for you
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models: a class that is backed by a database table
class Manufacturer < ActiveRecord::Base
end
class Car < ActiveRecord::Base
end

get '/' do
    erb :home
end

# INDEX
get '/manufacturers' do
    @manufacturers = Manufacturer.all
    erb :manufacturers_index
end

# NEW
get '/manufacturers/new' do
    erb :manufacturers_new
end

# CREATE
post '/manufacturers' do
    manufacturer = Manufacturer.new
    manufacturer.name = params[:name]
    manufacturer.country = params[:country]
    manufacturer.yearfounded = params[:yearfounded]
    manufacturer.founder = params[:founder]
    manufacturer.logo = params[:logo]
    manufacturer.website = params[:website]
    manufacturer.save
    redirect to("/manufacturers/#{ manufacturer.id }")
end

# SHOW
get '/manufacturers/:id' do
    @manufacturer = Manufacturer.find params[:id]
    erb :manufacturers_show
end

# EDIT
get '/manufacturers/:id/edit' do
    @manufacturer = Manufacturer.find params[:id]
    erb :manufacturers_edit
end

# UPDATE
post '/manufacturers/:id' do
    manufacturer = Manufacturer.find params[:id]
    manufacturer.name = params[:name]
    manufacturer.country = params[:country]
    manufacturer.yearfounded = params[:yearfounded]
    manufacturer.founder = params[:founder]
    manufacturer.logo = params[:logo]
    manufacturer.website = params[:website]
    manufacturer.save
    redirect to("/manufacturers/#{ manufacturer.id }")
   
end

# DESTROY

get '/manufacturers/:id/delete' do
    manufacturer = Manufacturer.find params[:id]
    manufacturer.destroy
    redirect to('/manufacturers')
end

# CAR CRUD 

#index
get '/cars' do
    @cars = Car.all
    erb :cars_index
end

#new
get '/cars/new' do
    erb :cars_new
end

#create
post '/cars' do
    car = Car.new
    car.name = params[:name]
    car.year = params[:year]
    car.layout = params[:layout]
    car.engine = params[:engine]
    car.power = params[:power]
    car.weight = params[:weight]
    car.image = params[:image]
    car.save
    redirect to("/cars/#{ car.id }")
end 
#edit 
get '/cars/:id/edit' do
    @car = Car.find params[:id]
    erb :cars_edit
end
#show
get '/cars/:id' do
    @car = Car.find params[:id]
    erb :cars_show
end

#Update 
post '/cars/:id' do
    car = Car.find params[:id]
    car.name = params[:name]
    car.year = params[:year]
    car.layout = params[:layout]
    car.engine = params[:engine]
    car.power = params[:power]
    car.weight = params[:weight]
    car.image = params[:image]
    car.save
    redirect to("/cars/#{ car.id }")
end
#destroy
get '/cars/:id/delete' do
    car = Car.find params[:id]
    car.destroy
    redirect to('/cars')
end