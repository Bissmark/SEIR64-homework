require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
    erb :home
end

get '/result' do
    @search = params[:book]
    # Get book info from google books search API
    book_info = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{ @search }")
    
    # Get authors, cover url and exact book title
    @author = book_info[ "items" ][ 0 ][ "volumeInfo" ][ "authors" ].join(",")
    @cover_url = book_info[ "items" ][ 0 ][ "volumeInfo" ][ "imageLinks" ][ "thumbnail" ]
    @book_title = book_info[ "items" ][ 0 ][ "volumeInfo" ][ "title" ]

    # check whether book title match
    @unmatch = ""
    if @search.downcase != @book_title.downcase
        @unmatch = "There is no book name exactly match your search '#{ @search }', do you mean: "
    end

    erb :result
end