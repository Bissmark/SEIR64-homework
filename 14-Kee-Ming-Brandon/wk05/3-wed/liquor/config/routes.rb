Rails.application.routes.draw do
  root :to => 'breweries#index'

  resources:beers
  resources:breweries
end
