require 'sinatra/activerecord'

Dir[File.join(File.dirname(__FILE__), 'app', '*.rb')].each { |file| require file }

run Sinatra::Application
