Rails.application.routes.draw do
  root :to => 'mangas#index'

  # INDEX
  get '/mangas' => 'mangas#index'

  # CREATE AND POST 
  get '/mangas/new' => 'mangas#new', :as => :new_manga
  post '/mangas' => 'mangas#create'


  # SHOW
  get '/mangas/:id' => 'mangas#show', :as => :manga

  # EDIT AND UPDATE
  get '/manga/:id/edit' => 'mangas#edit', :as => :edit_manga
  post '/mangas/:id' => 'mangas#update'

  # DELETE
  get '/mangas/:id/delete' => 'mangas#destroy', :as => :delete_manga
end 
