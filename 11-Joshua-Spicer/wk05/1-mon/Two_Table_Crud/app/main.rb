require 'sinatra'

get '/' do
  'Buy and Sell Books at the lowest prices. Guaranteed!'
end

get '/books' do
    @books = Book.all
    erb :'books/index'
  end
  
  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :'books/show'
  end
  
  get '/sales' do
    @sales = Sale.all
    erb :'sales/index'
  end
  
  get '/sales/:id' do
    @sale = Sale.find(params[:id])
    erb :'sales/show'
  end
  