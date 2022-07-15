class IssueController < ApplicationController
    
    def index
        render json: Issue.all, except: clean, status: 200
    end

    def show
        render json: Issue.find(params[:id]), except: clean, status: 200
    end

    def create
        render json: Issue.create!(issue_params), status: 201
    end

    private

    def issue_params
        params.permit(:comment, :catagory_id, :user_id)
    end

    def clean
        [:created_at, :updated_at]
    end
end
