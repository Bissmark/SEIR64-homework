require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

# Tedious configuration: tomorrow rails will do this for you
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

class Car < ActiveRecord::Base
    belongs_to :company, :optional => true
end

class Company < ActiveRecord::Base
    has_many :cars
end

get '/' do
    erb :home
end

get '/cars' do
    @cars = Car.all
    erb :cars_index
end

get '/cars/new' do
    erb :cars_new
end


# CREATE
# insert the user's form data into database
post '/cars' do
    car = Car.new
    car.make = params[:make]
    car.model = params[:model]
    car.body = params[:body]
    car.color = params[:color]
    car.year = params[:year]
    car.kilometres = params[:kilometres]
    car.transmission = params[:transmission]
    car.engine = params[:engine]
    car.image = params[:image]
    car.company_id = params[:company_id]
    car.save
    redirect to("/cars/#{ car.id }") #GET /cars
end

# SHOW
# Show a single car
get '/cars/:id' do
    @car = Car.find params[:id]
    erb :cars_show
end

# EDIT
# Pre-filled form for updating car
get '/cars/:id/edit' do
    @car = Car.find params[:id]
    erb :cars_edit
end 

# UPDATE
# Update a car with the user's form data
post '/cars/:id' do
    car = Car.find params[:id]
    car.make = params[:make]
    car.model = params[:model]
    car.body = params[:body]
    car.color = params[:color]
    car.year = params[:year]
    car.kilometres = params[:kilometres]
    car.transmission = params[:transmission]
    car.engine = params[:engine]
    car.image = params[:image]
    car.company_id = params[:company_id]
    car.save
    redirect to("/cars/#{ car.id }")
end

# DESTROY
# delete a car from the database

get '/cars/:id/delete' do
    car = Car.find params[:id]
    car.destroy
    redirect to('/cars')
end

######################################################################################

# INDEX
get '/companies' do
    @companies = Company.all
    erb :companies_index
end

# NEW
# blank form for adding cars
get '/companies/new' do
    erb :companies_new
end

post '/companies' do
    company = Company.new
    company.name = params[:name]
    company.image = params[:image]
    company.save
    redirect to("/companies/#{ company.id }")
end

get '/companies/:id' do
    @company = Company.find params[:id]
    erb :companies_show
end

get '/companies/:id/edit' do
    @company = Company.find params[:id]
    erb :companies_edit
end

post '/companies/:id' do
    company = Company.new
    company.name = params[:name]
    company.image = params[:image]
    company.save
    redirect to("/companies/#{ company.id }")
end

get '/companies/:id/delete' do
    company = Company.find params[:id]
    company.destroy
    redirect to ('/companies')
end

