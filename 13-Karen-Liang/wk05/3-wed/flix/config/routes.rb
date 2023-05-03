Rails.application.routes.draw do
  root 'animes#index' 
  get 'animes/index'
  get 'animes/new'
  get 'animes/edit'
  get 'animes/show'
  get 'studios/index'
  get 'studios/new'
  get 'studios/edit'
  get 'studios/show'
  resources :studios
  resources :animes
end
