Rails.application.routes.draw do
  resources :entries
  resources :users
  get '/users', to: 'users#index'
  post '/login', to: 'auth#login'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
