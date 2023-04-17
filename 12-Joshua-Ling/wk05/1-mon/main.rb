require "sinatra"
require "sinatra/reloader"
require "active_record"

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Color < ActiveRecord::Base
end

class Flower < ActiveRecord::Base
end

get "/" do
    erb :home
end

get "/colors" do
    @colors = Color.all
    erb :colors_index
end

get "/colors/new" do 
    erb :colors_new
end

post "/colors" do 
    color = Color.new
    color.name = params[:name]
    color.likeability = params[:likeability]
    color.image = params[:image]
    color.save
    redirect to("/colors/#{color.id}")
end

get "/colors/:id" do
    @color = Color.find params[:id]
    erb :colors_show
end

get "/colors/:id/edit" do
    @color = Color.find params[:id]
    erb :colors_edit
end

post "/colors/:id" do
    color = Color.find params[:id]
    color.name = params[:name]
    color.likeability = params[:likeability]
    color.image = params[:image]
    color.save
    redirect to("/colors/#{color.id}")
end

get "/colors/:id/delete" do
    color = Color.find params[:id]
    color.destroy
    redirect to("/colors")
end

#FLOWEEEEEEEEEEERS

get "/flowers" do
    @flowers = Flower.all
    erb :flowers_index
end

get "/flowers/new" do
    erb :flowers_new
end

post "/flowers" do
    flower = Flower.new
    flower.name = params[:name]
    flower.image = params[:image]
    flower.save
    redirect to ("/flowers/#{flower.id}")
end

get "/flowers/:id" do
    @flower = Flower.find params[:id]
    erb :flowers_show       
end

get "/flowers/:id/edit" do 
    @flower = Flower.find params[:id]
    erb :flowers_edit
end

post "/flowers/:id" do
    flower = Flower.find params[:id]
    flower.name = params[:name]
    flower.image = params[:image]
    flower.save
    redirect to ("/flowers/#{flower.id}")
end

get "/flowers/:id/delete" do 
    flower = Flower.find params[:id]
    flower.destroy
    redirect to("/flowers")
end