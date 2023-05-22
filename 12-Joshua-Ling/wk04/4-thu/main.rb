require "httparty"
require "sinatra"
require "sinatra/reloader"

response =
  HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:Ulysses")

title = "jaws"
book_url = ""

get '/' do
    erb :search
end

get '/result' do
    title = params[:book]
    response =
        HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{title}")
    @thumbnail = response["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @book_title = response["items"][0]["volumeInfo"]["title"]
    @author = response["items"][0]["volumeInfo"]["authors"][0]
    @description = response["items"][0]["volumeInfo"]["description"]
    erb :result
end

# binding.irb