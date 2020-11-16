if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_habit-helper', domain: :all
    Rails.application.config.session_store :cookie_store, key: '_habit-helper' 
  end