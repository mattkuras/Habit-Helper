module Api
    module V1
        class IdentitiesController < ApplicationController
            protect_from_forgery with: :null_session
            skip_before_action :verify_authenticity_token
            def index
                identities = Identity.all
                render json: IdentitySerializer.new(identities, options).serialized_json
            end

            def show 
                identity = Identity.find_by(id: params[:id])
                render json: IdentitySerializer.new(identity, options).serialized_json
            end

            def create 
                user = current_user
                identity = user.identities.build(identity_params)
                if identity.save
                    render json: IdentitySerializer.new(identity).serialized_json
                else
                    render json: { error: identity.errors.messages }, status: 422
                end
            end

            def update
                identity = Identity.find_by(id: params[:id])
                new_successful_days = params[:checked_boxes] - identity.checked_boxes
                identity.successful_days = identity.successful_days += new_successful_days
                if identity.update(identity_params)
                    render json: IdentitySerializer.new(identity).serialized_json
                else
                    render json: { error: identity.errors.messages }, status: 422
                end
            end
            
            def destroy
                identity = Identity.find_by(id: params[:id])
                if identity.destroy
                    head :no_content
                else
                    render json: { error: identity.errors.messages }, status: 422
                end
            end

        private

        def identity_params
            params.require(:identity).permit(
                :name,
                :description,
                :standard,
                :category_id,
                :checked_boxes
            )
        end

        def options
            @options ||= { include: %i[category] }
        end

        end
    end
end