class ReviewsController < ApplicationController

    def index
        render json: Review.all
    end

    def create
        # return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        review = Review.create(review_params)
        render json: review, status: :created
    end

    private
    
    def review_params
        params.permit(:comment, :rating, :donut_shop_id, :user_id)
    end
end
