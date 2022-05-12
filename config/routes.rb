Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get '/donuts', to: "donuts#index"
  get '/donutShops', to: "donut_shops#index"
  get '/reviews', to: "reviews#index"
  get '/users', to: "users#index"
end
