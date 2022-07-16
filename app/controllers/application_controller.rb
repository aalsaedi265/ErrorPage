class ApplicationController < ActionController::Base
    
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    private

    def except
        [:created_at, :updated_at]
   end

    def record_not_found(x)
        render json: {error: "#{x}"}, status: 404
    end

    def record_invalid(x)
        render json: {errors: x.record.errors.full_messages}, status: 422
    end

end