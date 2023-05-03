Rails.application.routes.draw do
  get 'cars/index'
  get 'cars/new'
  get 'cars/edit'
  get 'cars/show'
  get 'manufacturers/index'
  get 'manufacturers/new'
  get 'manufacturers/edit'
  get 'manufacturers/show'
  resources :manufacturers
  resources :cars
end
