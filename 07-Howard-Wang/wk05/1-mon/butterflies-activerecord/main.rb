require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

# Tedius configuration: Tomorrow Rails will do this for you
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Option bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models: a class that is backed by a database table
class Book < ActiveRecord::Base
end
class Author < ActiveRecord::Base
end

get '/' do
    erb :home
end

# INDEX
# SHOW YOU ALL BOOKS
get '/books' do
    @books = Book.all
    erb :books_index
end

# NEW ACTION
# BLANK FORM FOR A NEW BOOK
get '/books/new' do
    erb :books_new
end

# CREATE   
# INSERT THE USER'S FORM DATA INTO THE DATABASE
post '/books' do
    book = Book.new
    book.name = params[:name]
    book.author = params[:author]
    book.save
    redirect to("/books/#{book.id}") 
end

# SHOW SINGLE BOOK
get '/books/:id' do
    @book = Book.find params[:id]
    erb :books_show
end

# EDIT
# Pre-filled form for updating
get '/books/:id/edit' do
    @book = Book.find params[:id]
    erb :books_edit
end

# UPDATE A BOOK WITH A USER'S FORM DATA
post '/books/:id' do
    book = Book.find params[:id]
    book.name = params[:name]
    book.author = params[:author]
    book.save
    redirect to("/books/#{ params[:id]}") 
end

# DESTORY
# DELETE A BOOK FROM THE DATABASE
get '/books/:id/delete' do
    book = Book.find params[:id]
    book.destroy
    redirect to('/books')
end


# Authors CRUD############################

get '/authors' do
    @authors = Author.all
    erb :authors_index
end

# NEW ACTION
# BLANK FORM FOR A NEW AUTHOR
get '/authors/new' do
    erb :authors_new
end

# CREATE   
# INSERT THE USER'S FORM DATA INTO THE DATABASE
post '/authors' do
    author = Author.new
    author.name = params[:name]
    author.hometown = params[:hometown]
    author.save
    redirect to("/authors/#{author.id}") 
end

# SHOW SINGLE AUTHOR
get '/authors/:id' do
    @author = Author.find params[:id]
    erb :authors_show
end

# EDIT
# Pre-filled form for updating an author
get '/authors/:id/edit' do
    @author = Author.find params[:id]
    erb :authors_edit
end

# UPDATE AN AUTHOR WITH A USER'S FORM DATA
post '/authors/:id' do
    author = Author.find params[:id]
    author.name = params[:name]
    author.hometown = params[:hometown]
    author.save
    redirect to("/authors/#{ author.id}") 
end
# DESTORY
# DELETE AN AUTHOR FROM THE DATABASE
get '/authors/:id/delete' do
    author = Author.find params[:id]
    author.destroy
    redirect to('/authors')
end