Rails.application.routes.draw do
  root to: 'animals#index' #didn't know why it didnt set / to index
  
  resources :animals
  resources :meals

end
