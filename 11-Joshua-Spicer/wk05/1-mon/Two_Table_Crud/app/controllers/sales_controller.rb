require 'sinatra'
require_relative '../models/sale'
require_relative '../models/book'

get '/sales' do
  @sales = Sale.all
  erb :'sales/index'
end

get '/sales/:id' do
  @sale = Sale.find(params[:id])
  erb :'sales/show'
end

get '/sales/new' do
  @books = Book.all
  erb :'sales/new'
end

post '/sales' do
  @sale = Sale.new(params[:sale])
  if @sale.save
    redirect '/sales'
  else
    erb :'sales/new'
  end
end
