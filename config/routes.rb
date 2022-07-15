Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :catagories, only: [:index, :show,]
  resources :issue, only: [:index, :show, :create, :update, :destroy] 
  resources :users, only: [:index, :show, :create]


  post "/signup", to: 'users#create'
  get '/me', to: 'users#show'
  
  post '/login', to: 'session#create'
  delete '/logout', to: 'session#destroy'

end
