class OceansController < ApplicationController
    def index
        @oceans = Ocean.all
    end

    def show
        @ocean = Ocean.find params[:id]
    end

    def new
    end

    def create
        ocean = Ocean.create :name => params[:name], :image => params[:image], :surface_area => params[:surface_area], :water_volume => params[:water_volume]
        redirect_to ocean_path(ocean.id)
    end

    def edit
        @ocean = Ocean.find params[:id]
    end

    def update
        ocean = Ocean.find params[:id]
        ocean.update :name => params[:name], :image => params[:image], :surface_area => params[:surface_area], :water_volume => params[:water_volume]
        redirect_to ocean_path(ocean.id)
    end

    def destroy
        ocean = Ocean.find params[:id]
        ocean.destroy
        redirect_to oceans_path
    end
               
end

