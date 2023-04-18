Rails.application.routes.draw do
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	root :to => 'mountains#index'
	
	get '/mountains' => 'mountains#index'
	get '/mountains/new' => 'mountains#new', :as => :new_mountain
	get '/mountains/:id' => 'mountains#show', :as => :mountain
	post '/mountains' => 'mountains#create'

end
