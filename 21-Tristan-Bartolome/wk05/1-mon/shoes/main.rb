require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Brand < ActiveRecord::Base
end

class Shoe < ActiveRecord::Base
end

get '/' do
    erb :home
end

# INDEX
# Shows all brands from brands_index
get '/brands' do
    @brands = Brand.all
    erb :brands_index
end

# NEW
# Shows brands_new
get '/brands/new' do
    erb :brands_new
end

# CREATE
# Allows user to add to brands
post '/brands' do
    brand = Brand.new
    brand.company = params[:company]
    brand.category = params[:category]
    brand.image = params[:image]
    brand.save
    redirect to("/brands/#{ brand.id }")
end

# SHOW
# Shows brands_show template and id
get '/brands/:id' do
    @brand = Brand.find params[:id]
    erb :brands_show
end

# EDIT
# Shows brands_edit
get '/brands/:id/edit' do
    @brand = Brand.find params[:id]
    erb :brands_edit
end

# UPDATE
# Allows user to edit and update data
post '/brands/:id' do
    brand = Brand.find params[:id]
    brand.company = params[:company]
    brand.category = params[:category]
    brand.image = params[:image]
    brand.save
    redirect to("/brands/#{ params[:id] }")
end

# DESTROY
get '/brands/:id/delete' do
    brand = Brand.find params[:id]
    brand.destroy
    redirect to('/brands')
end

# SHOES CRUD ##########################

# INDEX
get '/shoes' do
    @shoes = Shoe.all
    erb :shoes_index
end

# NEW
get '/shoes/new' do
    erb :shoes_new
end

# CREATE
post '/shoes' do
    shoe = Shoe.new
    shoe.name = params[:name]
    shoe.image = params[:image]
    shoe.save
    redirect to("/shoes/#{ shoe.id }")
end

# SHOW
get '/shoes/:id' do
    @shoe = Shoe.find params[:id]
    erb :shoes_show
end

# EDIT
get '/shoes/:id/edit' do
    @shoe = Shoe.find params[:id]
    erb :shoes_edit
end

# UPDATE
post '/shoes/:id' do
    shoe = Shoe.find params[:id]
    shoe.name = params[:name]
    shoe.image = params[:image]
    shoe.save
    redirect to("/shoes/#{ shoe.id }")
end

# DESTROY
get '/shoes/:id/delete' do
    shoe = Shoe.find params[:id]
    shoe.destroy
    redirect to('/shoes')
end