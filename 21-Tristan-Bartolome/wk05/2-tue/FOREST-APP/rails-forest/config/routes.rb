Rails.application.routes.draw do
  root :to => 'forests#index'

  get '/forests' => 'forests#index'
  get '/forests/new' => 'forests#new', :as => :new_forest
  post '/forests' => 'forests#create'
  get '/forests/:id' => 'forests#show', :as => :forest
  get '/forests/:id/edit' => 'forests#edit', :as => :edit_forest
  post '/forests/:id' => 'forests#update'
  get '/forests/:id/delete' => 'forests#destroy', :as => :delete_forest
end
