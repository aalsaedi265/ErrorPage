class SessionsController < ApplicationController

    def create
        user = User.find(params[:id])
        if user&authenticate(params[:name])
            session[:user_id] =user.id
            render json: user
            byebug
        else
            render json:{errors: ['Invalid credentails try again']}, status: 401
         end
    end

    def destroy 
        session.delete :user_id
        head: :no_content
    end
end