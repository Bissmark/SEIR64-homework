require 'sinatra'
require  'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home 
end

get '/cover' do

  title = params[:book_name].to_s
  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }"
  info = HTTParty.get book_url
  @cover = info['items'][0]['volumeInfo']['imageLinks']['thumbnail']

    #Display the result
    erb :cover
end
