require 'sinatra'
require 'httparty'

get '/' do
  erb :index
end

post '/' do
  @title = params[:title]
  response = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{@title}")
  if response.success?
    data = JSON.parse(response.body)
    if data["totalItems"] > 0
      @book = data["items"][0]["volumeInfo"]
      erb :results
    else
      erb :no_results
    end
  else
    erb :error
  end
end