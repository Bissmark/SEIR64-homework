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
       mountain = Mountain.create :name => params[:name], :image => params[:image], :height => params[:height], :country => params[:country], :first_year_climbed => params[:first_year_climed]
       redirect_to mountain_path(mountain.id)
    end

    def edit
    end


    def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountain_path
    end
end