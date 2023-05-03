Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'firearms#home'

  get '/firearms' => 'firearms#index'
  get '/firearms/new' => 'firearms#new', :as => :new_firearm #rename path
  post '/firearms' => 'firearms#create'
  get '/firearms/:id' => 'firearms#show', :as => :firearm
  get '/firearms/:id/edit' => 'firearms#edit', :as => :edit_firearm
  post '/firearms/:id' => 'firearms#update'
  get '/firearms/:id/delete' => 'firearms#delete', :as => :delete_firearm

end
