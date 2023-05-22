require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

# Tedious configuration: tomorrow Rails will do this for you
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models: a class that is backed by a database table
class Author < ActiveRecord::Base
    has_many :books, dependent: :destroy
end

# Models:a class that is backed by a database table
class Book < ActiveRecord::Base
    belongs_to :author
end

get '/' do
    erb :home
end

# INDEX
# Show you all the authors
get '/authors' do
    @authors = Author.all
    erb :authors_index
end

# NEW
# Blank form for a new author
get '/authors/new' do
    erb :authors_new
end

# CREATE
# Insert the user's form data into the database
post '/authors' do
    author = Author.new
    author.name = params[:name]
    author.save
    redirect to("/authors/#{ author.id }") # GET /authors
end

# SHOW
# Show a single author
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

# UPDATE
# Update an author with the user's form data
post '/authors/:id' do
    author = Author.find params[:id]
    author.name = params[:name]
    author.save
    redirect to("/authors/#{ params[:id] }") # GET /authors/17 SHOW
end

# DESTROY
# Delete an author from the database
get '/authors/:id/delete' do
    author = Author.find params[:id]
    author.destroy
    redirect to('/authors')
end

# Books CRUD ################################

# INDEX
# Show you all the books
get '/books' do
    @books = Book.all
    erb :books_index
end

# NEW
# Blank form for a new book
get '/books/new' do
    erb :books_new
end

# CREATE
# Insert the user's form data into the database
post '/books' do
    book = Book.new
    book.title = params[:title]
    book.author_id = params[:author_id]
    book.published_at = params[:published_at]
    book.image = params[:image]
    book.save
    redirect to("/books/#{ book.id }") # GET /books
end

# SHOW
# Show a single book
get '/books/:id' do
    @book = Book.find params[:id]
    erb :books_show
end

# EDIT
# Pre-filled form for updating a book
get '/books/:id/edit' do
    @book = Book.find params[:id]
    erb :books_edit
end

# UPDATE
# Update a book with the user's form data
post '/books/:id' do
    book = Book.find params[:id]
    book.title = params[:title]
    book.author_id = params[:author_id]
    book.published_at = params[:published_at]
    book.image = params[:image]
    book.save
    redirect to("/books/#{ params[:id] }") # GET /books/17 SHOW
end

# DESTROY
# Delete a book from the database
get '/books/:id/delete' do
    book = Book.find params[:id]
    book.destroy
    redirect to('/books')
end
