require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

# Tedious configuration: tomorrow Rails will do this for you
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# # Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# # Models: a class that is backed by a database table
class Model < ActiveRecord::Base
end

class Company < ActiveRecord::Base
end

# Reason why Car model & company was chosen, is because of the has_many association relationship. E.g.
# Company: Toyota // Model: Corolla; Camry; RAV4 
# Company: Honda // Model: Civic; Accord; Jazz

get '/' do
    erb :home
end

# INDEX
# Show you all the companies
get '/companies' do
    @companies = Company.all
    erb :companies_index
end

# NEW
# Blank form for a new company
get '/companies/new' do
    erb :companies_new
end

# CREATE
# Insert the user's form data into the database
post '/companies' do
    company = Company.new
    company.name = params[:name]
    # company.family = params[:family]
    company.image = params[:image]
    company.save
    redirect to("/companies/#{ company.id }") # GET /companies
end

# SHOW
# Show a single company
get '/companies/:id' do
    @company = Company.find params[:id]
    erb :companies_show
end

# EDIT
# Pre-filled form for updating a company
get '/companies/:id/edit' do
    @company = Company.find params[:id]
    erb :companies_edit
end

# UPDATE
# Update a company with the user's form data
post '/companies/:id' do
    company = Company.find params[:id]
    company.name = params[:name]
    # company.family = params[:family]
    company.image = params[:image]
    company.save
    redirect to("/companies/#{ params[:id] }") # GET /companies/17 SHOW
end

# DESTROY
# Delete a company from the database
get '/companies/:id/delete' do
    company = Company.find params[:id]
    company.destroy
    redirect to('/companies')
end

# Models CRUD
##########################################################################

get '/' do
    erb :home
end

#INDEX
get '/models' do
    @models = Model.all
    erb :models_index
end

# NEW
get '/models/new' do
    erb :models_new
end


# CREATE
# Insert the user's form data into the database
post '/models' do
    model = Model.new
    model.name = params[:name]
    # model.family = params[:family]
    model.image = params[:image]
    model.save
    redirect to("/models/#{ model.id }") # GET /models
end

# SHOW
get '/models/:id' do
    @models = Model.find params[:id]
    erb :models_show
end



# EDIT
# Pre-filled form for updating a model
get '/models/:id/edit' do
    @models = Model.find params[:id]
    erb :models_edit
end

# UPDATE
# Update a model with the user's form data
post '/models/:id' do
    model = Model.find params[:id]
    model.name = params[:name]
    # model.family = params[:family]
    model.image = params[:image]
    model.save
    redirect to("/models/#{ model.id }") # GET /model/17 SHOW
end

# DESTROY
# Delete a model from the database
get '/models/:id/delete' do
    model = Model.find params[:id]
    model.destroy
    redirect to('/models')
end

