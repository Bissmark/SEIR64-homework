Rails.application.routes.draw do
  root :to => 'wines#index'

  get '/wines' => 'wines#index'
  get '/wines/new' => 'wines#new', :as => :new_wine
  post '/wines' => 'wines#create'
  get '/wines/:id' => 'wines#show', :as => :wine
  get '/wines/:id/edit' => 'wines#edit', :as => :edit_wine
  post '/wines/:id' => 'wines#update' 
  get '/wines/:id/delete' => 'wines#destroy', :as => :delete_wine

end