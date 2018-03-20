Rails.application.routes.draw do
  def draw(routes_name)
    instance_eval(File.read(Rails.root.join("config/routes/#{routes_name}.rb")))
  end

  draw :admin
  draw :media
  draw :api

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index'
  devise_for :users, controllers: {
      sessions: 'users/sessions',
      passwords: 'users/passwords',
  }
  resources :articles, only: %i[index show]
end
