require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# For thumbnails!
# info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

get "/" do
    erb :home
end

get "/info" do

    book_title = params[:book_title]

    @info = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=#{book_title}")
    #insert code here

    erb :info
end