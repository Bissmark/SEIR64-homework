require "sinatra"
require "sinatra/reloader"
require "httparty"

get "/" do
    erb :home
end

get "/book_result" do
    @title = params[:book_name]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
    @book_info = HTTParty.get book_url
    @book_cover = @book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    book_author = @book_info["items"][0]["volumeInfo"]["authors"]
    if book_author.size == 2
        @formatted_authors = book_author.join(" and ")
    elsif book_author.size > 2
        @formatted_authors = book_author[0..-2].join(", ") + " and #{book_author[-1]}"
    else
        @formatted_authors = book_author.join()
    end
    @book_synopsis = @book_info["items"][0]["volumeInfo"]["description"]
    erb :book_result
end

