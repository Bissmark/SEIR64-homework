require 'sinatra'
require_relative '../models/book'

get '/books' do
  @books = Book.all
  erb :'books/index'
end

get '/books/:id' do
  @book = Book.find(params[:id])
  erb :'books/show'
end
