Rails.application.routes.draw do
  root :to => 'mountains#index'

  get '/mountains' => 'mountains#index' 
  get '/mountains/new' => 'mountains#new', :as => :new_planet
  post '/mountains' => 'mountains#create'
  get '/mountains/:id' => 'mountains#show', :as => :planet
  get '/mountains/:id/edit' => 'mountains#edit', :as => :edit_planet
  post '/mountains/:id' => 'mountains#update'
  get '/mountains/:id/delete' => 'mountains#destroy', :as => :delete_mountain
end