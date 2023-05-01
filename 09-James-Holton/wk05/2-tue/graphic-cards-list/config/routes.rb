Rails.application.routes.draw do
  root :to => 'graphics#index'

  get '/graphics' => 'graphics#index'
  get '/graphics/new' => 'graphics#new', :as => :new_graphic
  post '/graphics' => 'graphics#create'
  get '/graphics/:id' => 'graphics#show', :as => :graphic
  get '/graphics/:id/edit' => 'graphics#edit', :as => :edit_graphic
  post '/graphics/:id' => 'graphics#update'
  get '/graphics/:id/delete' => 'graphics#destroy', :as => :delete_graphic
end
