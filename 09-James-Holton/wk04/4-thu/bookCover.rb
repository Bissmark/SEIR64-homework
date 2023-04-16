require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# title = 'Jaws'

# book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ params[:book_name] }"
# info = HTTParty.get book_url

get '/' do
    erb :home
end

get '/info' do
    book_title = params[:book_name]
    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{book_title}"
    @info = HTTParty.get(url)
    erb :info
end