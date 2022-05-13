class DonutCartController < ApplicationController

    def create
        donut_cart = DonutCart.create(donut_params)
        render json: donut_cart, status: :created
    end

    def destroy
        user = User.find_by(id: params[:id])
        DonutCart.where(user_id: params[:id]).destroy_all
        head :no_content
    end

    private
    
    def donut_params
        params.permit(:donut_name, :image_url, :price, :user_id)
    end
end
