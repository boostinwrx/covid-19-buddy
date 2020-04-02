Rails.application.routes.draw do
  resources :entries
  resources :users
  get '/users', to: 'users#index'
  post '/login', to: 'auth#login'
  get '/entries', to: 'entry#index'

  get '/auto_login', to: 'auth#auto_login'
  get '/user_is_authed', to: 'auth#user_is_authed'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
