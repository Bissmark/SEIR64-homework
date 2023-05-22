Rails.application.routes.draw do
  get 'carmodels/index'
  get 'carmodels/new'
  get 'carmodels/create'
  get 'carmodels/edit'
  get 'carmodels/update'
  get 'carmodels/show'
  get 'carmodels/destroy'
  get 'companies/index'
  get 'companies/new'
  get 'companies/create'
  get 'companies/edit'
  get 'companies/update'
  get 'companies/show'
  get 'companies/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :companies
  resources :carmodels
end
