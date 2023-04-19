Rails.application.routes.draw do
  root :to => 'mountains#index'
  get '/mountrains' => 'mountains#index'
  get '/mountains/new' => 'mountains#new'
  post '/mountains' => 'mountains#create'
  get '/mountains/:id' => 'mountains#show', :as => "mountain"
  get '/mountains/:id/edit' => 'mountains#edit', :as => "edit_mountain"
  # post '/mountains/:id => 'mountains#update'
  get '/mountains/:id/delete' => 'mountains#destroy', :as => "delete_mountain"
end

# <%= link_to mountain.name, mountain_path(mountain.id) %>is in <%= mountain.country, 'country'  %>