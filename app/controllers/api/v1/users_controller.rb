module Api
    module V1
        class UsersController < ApplicationController

            protect_from_forgery with: :null_session
             skip_before_action :verify_authenticity_token

            def create 
                
                @user = User.new(user_params)

                if @user.save 
                    
                    login!
                    render json: {
                        logged_in: true,
                        user: @user
                    }
                else
                    render json: { error: @user.errors.messages }, status: 422
                end
            end
            
            def show 
                user = User.find_by(id: params[:id])
                if user 
                    render json: UserSerializer.new(user, options).serialized_json
                else 
                    render json: {
                        status: 500,
                        errors: ['user not found']
                      }
                end
            end
        
        

            def update
                user = User.find_by(id: params[:id])
                if user.update(user_params)
                    render json: UserSerializer.new(user).serialized_json
                else
                    render json: { error: user.errors.messages }, status: 422
                end
            end

            private 

            def user_params
                params.require(:user).permit(
                    :name,
                    :email,
                    :password,
                    :password_confirmation
                )
            end

            def options
                @options ||= { include: %i[ identities ]}
            end

        end
    end
end