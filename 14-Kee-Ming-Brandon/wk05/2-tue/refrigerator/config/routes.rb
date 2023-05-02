Rails.application.routes.draw do
  root :to => 'fridges#index'

  get '/fridges' => 'fridges#index'



  get '/fridges/new' => 'fridges#new', :as => :new_fridge
  post '/fridges' => 'fridges#create'
  get '/fridges/:id' => 'fridges#show', :as => :fridge
  get '/fridges/:id/edit' => 'fridges#edit', :as => :edit_fridge
  post '/fridges/:id' => 'fridges#update'
  get '/fridges/:id/delete' => 'fridges#destroy', :as => :delete_fridge

end
