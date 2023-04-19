Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # CRUD
  root :to => 'mountains#index'
    # INDEX
  get '/mountains' => 'mountains#index'

    # NEW
  get '/mountains/new'=> 'mountains#new', :as => :new_mountain

    # CREATE
  post '/mountains'=> 'mountains#create'

    # SHOW
  get '/mountains/:id' => 'mountains#show', :as => :mountain

    # EDIT
  get '/mountains/:id/edit' => 'mountains#edit', :as => :edit_mountain

    # UPDATE
  post '/mountains/:id' => 'mountains#update'

   # DESTROY
  get '/mountains/:id/delete' => 'mountains#destroy', :as => :destroy




end
