Rails.application.routes.draw do
  root :to => 'asteroids#index'
  
    get '/asteroids' => 'asteroids#index'  #    Controller#Action
  # HTTPVerb  '/path' =>  Controller#Action
    get 'asteroids/new' => 'asteroids#new', :as => :new_asteroid
    post '/asteroids' => 'asteroids#create'
    get '/asteroids/:id' => 'asteroids#show', :as => :asteroid
                                          # this is the shortcut / name thing on the path
    get '/asteroids/:id/edit' => 'asteroids#edit', :as => :edit_asteroid
    post '/asteroids/:id' => 'asteroids#update'
    get '/asteroids/:id/delete' => 'asteroids#destroy', :as => :delete_asteroid
end
  