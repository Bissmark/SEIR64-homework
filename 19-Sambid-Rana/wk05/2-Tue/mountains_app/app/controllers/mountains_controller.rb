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
        mountain = Mountain.create :name => params[:name], :location => params[:location], :elevation => params[:elevation], :first_ascent => params[:first_ascent], :image => params[:image]

        redirect_to mountain_path(mountain.id)
    end

    def edit
        @mountain = Mountain.find params[:id]
    end


end