class DonutsController < ApplicationController

    def index
        donuts = Donut.all
        render json: donuts
    end
end
