require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/book' do

    title = params[:title]

    book_info = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"

    @info = book_info['items'][0]['volumeInfo']

    erb :book

end