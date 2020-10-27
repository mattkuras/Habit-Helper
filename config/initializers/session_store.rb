if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_habit-helper', domain: 'localhost:3000'
  else
    Rails.application.config.session_store :cookie_store, key: '_habit-helper' 
  end