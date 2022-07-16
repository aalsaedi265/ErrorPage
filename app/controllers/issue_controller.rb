class IssueController < ApplicationController
    
    def index
        render json: Issue.all, except: except, status: 200
    end

    def show
        render json: Issue.find(params[:id]), except: except, status: 200
    end

    def create
        render json: Issue.create!(issue_params), status: 201
    end

    def update
        issue = Issue.find(params[:id])
        render json: issue.update(issue_params), status: 200
    end

    def destroy
        issue = Issue.find(params[:id])
        issue.destroy
        head :no_content
    end

    private

    def issue_params
        params.permit(:comment, :catagory_id, :user_id)
    end

end
