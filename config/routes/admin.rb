namespace :admin do
  get '/', to: 'base#index'
  resources :articles
end
