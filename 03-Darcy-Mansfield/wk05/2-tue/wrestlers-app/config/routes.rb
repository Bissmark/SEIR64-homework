Rails.application.routes.draw do
  root :to => "wrestlers#index"
  get "/wrestlers" => "wrestlers#index"
  get "/wrestlers/new" => "wrestlers#new", :as => :new_wrestler
  post "/wrestlers" => "wrestlers#create"
  get "/wrestlers/:id" => "wrestlers#show", :as => :wrestler
  get "/wrestlers/:id/edit" => "wrestlers#edit", :as => :edit_wrestler
  get "/wrestlers/:id/delete" => "wrestlers#destroy", :as => :delete_wrestler
  post "/wrestlers/:id" => "wrestlers#update"
end
