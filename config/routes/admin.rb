devise_for :admin_users, path: 'admin', controllers: {
    confirmations: 'admin_users/confirmations',
    passwords: 'admin_users/passwords',
    registrations: 'admin_users/registrations',
    sessions: 'admin_users/sessions',
    unlocks: 'admin_users/unlocks'
}

namespace :admin do
  get '/', to: 'base#index'
  resources :articles
end
