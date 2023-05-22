Rails.application.routes.draw do
  get 'dishes/index'
  get 'dishes/new'
  get 'dishes/edit'
  get 'dishes/show'
  resources :regions
  resources :dishes
end