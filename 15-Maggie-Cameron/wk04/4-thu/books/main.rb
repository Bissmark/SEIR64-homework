require 'sinatra'
require 'httparty'
require 'sinatra/reloader'

get '/' do
    erb :home 
end

get '/book_preview' do
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ params[:title] }"
    @book_info = HTTParty.get book_url
    
    erb :book_preview
end