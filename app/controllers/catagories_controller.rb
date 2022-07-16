class CatagoriesController < ApplicationController

    def index
        render json: Catagory.all, except: except
    end

    def show
        render json: Catagory.find(params[:id]),except: except, status: 200
    end

end
