Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'mountains#index' #mountains_path
  
  get '/mountains' => 'mountains#index' #will look for a 'def' in controllers with the name after # 
  get '/mountains/new' => 'mountains#new', :as => :new_mountain #:new_planet can be used as to create path in html.erb file
  post '/mountains' => 'mountains#create'
  get '/mountains/:id' => 'mountains#show', :as => :mountain
  get '/mountains/:id/edit' => 'mountains#edit', :as => :edit_mountain 


end
