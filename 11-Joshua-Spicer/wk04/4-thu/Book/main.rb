require 'sinatra'
require "sinatra/reloader"
require 'httparty'

set :public_folder, File.join(File.dirname(__FILE__), 'public')
set :views, File.join(File.dirname(__FILE__), 'views')

get '/' do
  erb :index
end

post '/search' do
  title = params[:title].gsub(' ', '+')
  url = "https://www.googleapis.com/books/v1/volumes?q=#{title}&maxResults=1"
  response = HTTParty.get(url)
  if response["items"]
    @book = response["items"].first["volumeInfo"]
    erb :book
  else
    erb :error
  end
end
