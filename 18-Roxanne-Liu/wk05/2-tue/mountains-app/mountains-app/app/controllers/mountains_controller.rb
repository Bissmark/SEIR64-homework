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
        # raise "hell" # Run DMC
        mountain = Mountain.create :name => params[:name], :elevation => params[:elevation], :country => params[:country], :image => params[:image]
        # redirect to() #sinatra way
        redirect_to mountain_path(mountain.id)
    end

    def edit
        @mountain = Mountain.find params[:id]
    end
    
    def update
        # get the mountain
        mountain = Mountain.find params[:id]
        # update the mountain from params 
        mountain.update :name => params[:name], :elevation => params[:elevation], :country => params[:country], :image => params[:image]
        # go to the show page for this mountain
        redirect_to mountain_path(mountain.id)
    end

    def destroy
        mountain = Mountain.find params[:id]
        mountain.destroy
        redirect_to mountains_path
    end
end