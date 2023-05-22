require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optiomal bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models: a class that is backed by a databse table
class Country < ActiveRecord::Base
end

class Dish < ActiveRecord::Base
end

# class Dish < ApplicationRecord
#     belongs_to :country
# end

# class CreateDish < ActiveRecord::Migration[5.0]
#     def change
#       create_table :countries do |t|
#         t.string :name
#         t.timestamps
#       end
   
#       create_table :dishes do |t|
#         t.belongs_to :country, index: true
#         t.string :origin_country
#         t.timestamps
#       end
#     end
#   end

get '/' do
    erb :home
end

# index
get '/countries' do 
    @countries = Country.all
    erb :countries_index
end

# new
get '/countries/new' do
    erb :countries_new
end

#create
post '/countries' do
    country = Country.new 
    country.name = params[:name]
    country.continent = params[:continent]
    country.image = params[:image]
    country.save
    redirect to("/countries/#{ country.id }")
end

# show
get '/countries/:id' do 
   @country = Country.find params[:id] 
    erb :countries_show
end

#edit
get '/countries/:id/edit' do
    @country = Country.find params[:id] 
    erb :countries_edit
end

#update
post '/countries/:id' do
  country = Country.find params[:id]
  country.name = params[:name]
  country.continent = params[:continent]
  country.image = params[:image]
  country.save
    redirect to ("/countries/#{ params[:id]}")
end

#destroy
get '/countries/:id/delete' do    
    country = Country.find params[:id]
    country.destroy
    redirect to ('/countries')
end

# # index
get '/dishes' do 
    @dishes = Dish.all
    erb :dishes_index
end

#new
get '/dishes/new' do
    erb :dishes_new
end

# create
post '/dishes' do
    dish = Dish.new
    dish.name = params[:name]
    dish.origin_country = params[:origin_country]
    dish.image = params[:image]
    dish.save 
    redirect to ("/dishes/#{ dish.id }")
end

# show
get '/dishes/:id' do 
    @dish = Dish.find params[:id]
    erb :dishes_show
end

#edit
get '/dishes/:id/edit' do
    @dish = Dish.find params[:id] 
    erb :dishes_edit
end

#update
post '/dishes/:id' do
  dish = Dish.find params[:id]
  dish.name = params[:name]
  dish.origin_country = params[:origin_country]
  dish.image = params[:image]
  dish.save
    redirect to ("/dishes/#{ dish.id }")
end

#destroy 
get '/dishes/:id/delete' do    
    dish = Dish.find params[:id]
    dish.destroy
    redirect to ('/dishes')
end