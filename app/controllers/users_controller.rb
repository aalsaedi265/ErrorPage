class UsersController < ApplicationController


    def index
        render json: User.all
    end

    def show 
        render json: User.find(params[:id]), except: except
    end

    private

    def user_params

    end
    
    def except
         [:created_at, :updated_at]
    end

end
