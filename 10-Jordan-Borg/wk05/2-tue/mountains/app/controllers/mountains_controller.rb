class MountainsController < ApplicationController
    def index
        @mountains = Mountain.all
    end

    def show
        @mountain = Mountain.find params[:id]
    end

    def new
    end

    def create
        mountain = Mountain.create :name => params[:name], :image => params[:image], :orbit => params[:orbit], :diameter => params[:diameter], :mass => params[:mass], :moons => params[:moons]
        redirect_to mountain_path(mountain.id)
    end

    def edit 
        @mountain = Mountain.find params[:id]
    end

    def update
        # get the mountain 
        # update the mountain from params
        # go to the show page for this mountain
        mountain = Mountain.find params[:id]
        mountain = Mountain.create :name => params[:name], :image => params[:image], :orbit => params[:orbit], :diameter => params[:diameter], :mass => params[:mass], :moons => params[:moons]
        redirect_to mountain_path(mountain.id)
        end

    def destroy
        mountain = Mountain.find params[:id]
        mountain.destroy
        redirect_to ountains_path
    end
end
