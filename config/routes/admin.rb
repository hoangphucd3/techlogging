namespace :admin do
  get '/', to: 'application#index'
  resources :articles
end
