Rails.application.routes.draw do
  root :to => 'shapes#index'

  get '/shapes' => 'shapes#index'
  get '/shapes/new' => 'shapes#new', :as => :new_shape
  post '/shapes' => 'shapes#create'
  get '/shapes/:id' => 'shapes#show', :as => :shape
  get '/shapes/:id/edit' => 'shapes#edit', :as => :edit_shape
  post '/shapes/:id' => 'shapes#update'
  get '/shapes/:id/delete' => 'shapes#destroy', :as => :delete_shape
end
