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
        mountain = Mountain.create :name => params[:name], :image => params[:image], :location => params[:location], :height => params[:height], :country => params[:country], :temperature => params[:temperature]
        redirect_to mountain_path(mountain.id)
    end

    def edit
        @mountain = Mountain.find params[:id]
    end

    def update
        mountain = Mountain.find params[:id]
        mountain.update :name => params[:name], :image => params[:image], :location => params[:location], :height => params[:height], :country => params[:country], :temperature => params[:temperature]
        redirect_to mountain_path(mountain.id)
    end

    def destroy
        mountain = Mountain.find params[:id]
        mountain.destroy
        redirect_to mountains_path
    end
end