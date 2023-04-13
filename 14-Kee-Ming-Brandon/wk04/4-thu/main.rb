require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
    erb :home
end

get '/result' do
    # Get book info from google books search API
    book_info = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{ params[:book] }")
    @book_title = book_info[ "items" ][ 0 ][ "volumeInfo" ][ "title" ]  # get actual title
    # check if book title match
    if params[:book].downcase == @book_title.downcase
        @unmatch = ""
    else
        @unmatch = "There is no book name exactly match your search, do you mean: "
    end
    # Get authors and cover url
    @author = book_info[ "items" ][ 0 ][ "volumeInfo" ][ "authors" ].join(",")
    @cover_url = book_info[ "items" ][ 0 ][ "volumeInfo" ][ "imageLinks" ][ "thumbnail" ]

    erb :result
end