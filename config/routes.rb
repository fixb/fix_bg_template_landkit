Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
get 'about', to: "pages#about"
get 'cgg', to: "pages#cgg"
get 'jazztel', to: "pages#jazztel"
get 'futuren', to: "pages#futuren"
get 'solocal', to: "pages#solocal"
end
