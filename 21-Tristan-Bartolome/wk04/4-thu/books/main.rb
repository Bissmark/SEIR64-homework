require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/image' do
    book_title = params[:book_name]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ book_title }"
    @book_info = HTTParty.get book_url
    erb :image
end