Rails.application.routes.draw do
  get 'players/index'
  get 'players/new'
  get 'players/edit'
  get 'players/show'
  # get 'player/index'
  # get 'player/new'
  # get 'player/edit'
  # get 'player/show'
  get 'clubs/index'
  get 'clubs/new'
  get 'clubs/edit'
  get 'clubs/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :clubs
  resources :players
end
