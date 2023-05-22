class MountainsController < ApplicationController
    def index
        @mountains = Mountain.All 
    end

    def show
        @mountains = Mountain.find param[:id]
    end

    def new
    end

    def create
        mountain = Mountain.create :name => params[:name], :image => params[:image], :elevation => params[:elevation], :diameter => params[:diameter], :country => params[:country], :type => params[:type], :first-ascent[:first-ascent]
        redirect_to mountain_path(mountain.id)
    end

    def edit
        @mountain = Mountain.find params[:id]
    end

    def update
        mountain = Mountain.update :name => params[:name], :image => params[:image], :elevation => params[:elevation], :diameter => params[:diameter], :country => params[:country], :type => params[:type], :first-ascent[:first-ascent]
        redirect_to mountain_path(mountain.id)
    end

    def destroy
        mountain = Mountain.find params[:id]
        mountain.destroy
        redirect_to mountains_path
    end
end