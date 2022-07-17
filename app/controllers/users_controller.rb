class UsersController < ApplicationController


    def index
        render json: User.all
    end
#will change show to render with session when logs are creatd
    def show 
        render json: User.find(params[:id]), except: except
    end

    def show
        user = user.find(session[:user_id])
        render json: user
    end

    def create
        render json: User.create!(user_params), except: except, status: 201
    end

    def create
       user = User.create!(user_params)
       session[:user_id] = user.id
       render json: user, status: 201
    end

    private

    def user_params
        params.permit(:name)
    end

end
