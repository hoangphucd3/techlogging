devise_for :admin_users, path: 'admin', controllers: {
    confirmations: 'admin_users/confirmation',
    passwords: 'admin_users/password',
    registrations: 'admin_users/registrations',
    sessions: 'admin_users/sessions',
    unlock: 'admin_users/unlock'
}

namespace :admin do
  get '/', to: 'base#index'
  resources :articles
end
