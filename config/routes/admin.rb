devise_for :admin_users, path: 'admin', controllers: {
    passwords: 'admin_users/passwords',
    sessions: 'admin_users/sessions',
    unlocks: 'admin_users/unlocks'
}

namespace :admin do
  get '/', to: 'base#index'
  resources :articles, except: :show
  resources :photo, only: %i[index create]
end
