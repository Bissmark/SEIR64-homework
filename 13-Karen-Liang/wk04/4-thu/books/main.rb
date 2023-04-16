require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/info' do
    # Get input title using params
    title = params[:book_title]

    # book URl - title updates at end of URL
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }"

    # get raw data of website
    info = HTTParty.get book_url

    # array info for img url
    @image = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    
    # description
    @description = info["items"][0]["volumeInfo"]["description"]

    # author
    @authors = info["items"][0]["volumeInfo"]["authors"].join(', ')
    
    # preview link
    @preview = info["items"][1]["volumeInfo"]["previewLink"]

    erb :info
end

# info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]