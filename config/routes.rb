Rails.application.routes.draw do
  get 'reach/index'
  get 'reach/show'
  resources :cards
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "reach" => 'reach#index', as: :reach
  # Defines the root path route ("/")
  root "cards#index"
end
