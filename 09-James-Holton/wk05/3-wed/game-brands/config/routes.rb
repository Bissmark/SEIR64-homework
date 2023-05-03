Rails.application.routes.draw do
  get 'consoles/index'
  get 'consoles/new'
  get 'consoles/edit'
  get 'consoles/show'
  resources :brands
  resources :consoles
end
