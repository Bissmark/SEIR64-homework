require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/display' do
    @book_title = params[:title]
    @book_cover_url = get_book_cover_url(@book_title)
    erb :display
end


def get_book_cover_url(title)
    # the url to get
    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"
    response = HTTParty.get(url)
    response["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
end