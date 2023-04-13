require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end