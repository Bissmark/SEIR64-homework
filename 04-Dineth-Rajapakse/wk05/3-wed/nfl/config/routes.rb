Rails.application.routes.draw do
  get 'players/index'
  get 'players/new'
  get 'players/edit'
  get 'players/show'
  get 'teams/index'
  get 'teams/new'
  get 'teams/edit'
  get 'teams/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :teams
  resources :players
end
