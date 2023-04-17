require 'sinatra'
require 'httparty'

get '/' do
    erb :home
  end

get '/' do
  if params[:title]
    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{params[:title]}"
    puts url
    response = HTTParty.get(url)
    puts response
  end
end