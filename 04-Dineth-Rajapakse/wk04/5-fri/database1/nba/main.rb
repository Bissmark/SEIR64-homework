require 'sinatra'   #sinatra for our web server
require 'sinatra/reloader' # so we dont have to keep reloading our server
require 'sqlite3'   #sqlite 3 for our database



#GET requests to the root path. No connection to the database required here.

get '/' do
    erb :home
end 

#INDEX

get '/index' do 
    
    
    erb :nba_index
end 

#<% @nba.each do |nba| %>
   #couldnt get this working 
# <p>
# <a href="/nba/<%= nba["id"] %>">
#     <%= nba["name"] %>
# </a>
# </p>
# <% end %>