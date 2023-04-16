require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# Set up a route to display the search form
get '/' do
  erb :index
end

# Set up a route to handle the search form submission
post '/' do
  # Retrieve the book title from the form
  book_title = params[:title]
  
  # Use HTTParty to fetch book data from Google Books API
  response = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=#{book_title}")
  
  
  # Check if any results were returned
  if book_data['totalItems'] == 0
    @error_message = "Sorry, no results found for '#{book_title}'"
  else
    # Retrieve the first result from the list of items
    first_result = book_data['items'].first['volumeInfo']
    
    # Extract the book data
    @title = first_result['title']
    @author = first_result['authors']
    @publisher = first_result['publisher']
    @description = first_result['description']
    @cover_image_url = first_result['imageLinks']['thumbnail']
  end
  
  erb :results
end

