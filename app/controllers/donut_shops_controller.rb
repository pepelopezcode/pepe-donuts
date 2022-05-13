class DonutShopsController < ApplicationController

    def index
        render json: DonutShop.all
    end

end
