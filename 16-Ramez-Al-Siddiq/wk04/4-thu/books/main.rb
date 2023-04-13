require 'sinatra'
require 'httparty'

get '/' do
    erb :home
  end

get '/' do
  if params[:title]
    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{params[:title]}"
    puts url
    response = HTTParty.get(url)
    puts response

    puts "Response code: #{response.code}"
    if response.code == 200
      data = response.parsed_response['items'].first
      puts data
      cover_url = data['volumeInfo']['imageLinks']['thumbnail']
      "<img src='#{cover_url}' alt='Book cover'>"
    else
      "Error: #{response.code}"
    end
  else
    erb :home
  end
end