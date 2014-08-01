Rails.application.routes.draw do
  root :to => 'pages#index'

  resources :planes
  resources :flights
  resources :reservations
  resources :users

end

# Prefix Verb   URI Pattern                 Controller#Action
#        root GET    /                           pages#index
#      planes GET    /planes(.:format)           planes#index
#             POST   /planes(.:format)           planes#create
#   new_plane GET    /planes/new(.:format)       planes#new
#  edit_plane GET    /planes/:id/edit(.:format)  planes#edit
#       plane GET    /planes/:id(.:format)       planes#show
#             PATCH  /planes/:id(.:format)       planes#update
#             PUT    /planes/:id(.:format)       planes#update
#             DELETE /planes/:id(.:format)       planes#destroy
#     flights GET    /flights(.:format)          flights#index
#             POST   /flights(.:format)          flights#create
#  new_flight GET    /flights/new(.:format)      flights#new
# edit_flight GET    /flights/:id/edit(.:format) flights#edit
#      flight GET    /flights/:id(.:format)      flights#show
#             PATCH  /flights/:id(.:format)      flights#update
#             PUT    /flights/:id(.:format)      flights#update
#             DELETE /flights/:id(.:format)      flights#destroy
