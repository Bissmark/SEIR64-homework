require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
    erb :home
end

get '/info' do

    @book_title = params[:book_title].capitalize
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title: #{ params[:book_title] }"
    book_info = HTTParty.get book_url
    @book_cover = book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @book_author = book_info["items"][0]["volumeInfo"]["authors"].join("")

    erb :info
end