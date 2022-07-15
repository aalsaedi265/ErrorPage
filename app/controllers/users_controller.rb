class UsersController < ApplicationController


    def index
        render json: User.all
    end
#will change show to render with session when logs are creatd
    def show 
        render json: User.find(params[:id]), except: except
    end

    def create
       render json: User.create!(user_params), status: 201
    end

    private

    def user_params
        params.permit(:name)
    end
    
    def except
         [:created_at, :updated_at]
    end

end
