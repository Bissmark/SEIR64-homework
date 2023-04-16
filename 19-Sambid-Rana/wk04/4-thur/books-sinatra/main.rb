require "sinatra"
require "sinatra/reloader"
require "httparty"

get "/" do 
    erb :home #directing towards home.erb
end

get "/bookcover" do

    title = params[:title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }"

    @info = HTTParty.get book_url

    
    erb :bookcover
    
end

