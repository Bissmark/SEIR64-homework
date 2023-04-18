require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

#Option bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

#Models:  class that is backed by a database table
class Car < ActiveRecord::Base
    # belongs_to :brand, :optional => true
end

class Brand < ActiveRecord::Base
    # has_many :cars
end


get '/' do
    erb :home
end

# INDEX
get '/cars' do
    @cars = Car.all
    erb :cars_index
end

# NEW
get '/cars/new' do
    erb :cars_new
end

# CREATE
post '/cars' do
    car = Car.new
    car.model = params[:model]
    car.brand = params[:brand]
    car.image = params[:image]
    car.save
    redirect to("/cars/#{ car.id }")
end

# SHOW
get '/cars/:id' do
    @car = Car.find params[:id]
    erb :cars_show
end

# EDIT 
get '/cars/:id/edit' do 
    @car = Car.find params[:id]
    erb :cars_edit
end

# UPDATE
post '/cars/:id' do
    car = Car.find params[:id]
    car.model = params[:model]
    car.brand = params[:brand]
    car.image = params[:image]
    car.save
    redirect to("/cars/#{ car.id }")
end

# DESTROY
get '/cars/:id/delete' do
    car = Car.find params[:id]
    car.destroy
    redirect to('/cars')
end

################## Brands ####################

# INDEX
get '/brands' do
    @brands = Brand.all
    erb :brands_index
end

# NEW
get '/brands/new' do
    erb :brands_new
end

# CREATE
post '/brands' do
    brand = Brand.new
    brand.name = params[:name]
    brand.origin = params[:origin]
    brand.logo = params[:logo]
    brand.save
    redirect to("/brands/#{ brand.id }")
end

# Origin list
get '/origin' do
    @brands = Brand.all
    erb :origin_list
end

# Origin
get '/origin/:origin' do
    @brands = Brand.where origin:params[:origin]
    @brand = @brands.first
    erb :brands_origin
end

# SHOW
get '/brands/:id' do
    @brand = Brand.find params[:id]
    erb :brands_show
end

# EDIT 
get '/brands/:id/edit' do 
    @brand = Brand.find params[:id]
    erb :brands_edit
end

# UPDATE
post '/brands/:id' do
    brand = Brand.find params[:id]
    brand.name = params[:name]
    brand.origin = params[:origin]
    brand.logo = params[:logo]
    brand.save
    redirect to("/brands/#{ brand.id }")
end

# DESTROY
get '/brands/:id/delete' do
    brand = Brand.find params[:id]
    brand.destroy
    redirect to('/brands')
end