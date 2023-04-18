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
        mountain = Mountain.create :name => params[:name], :elevation => params[:elevation], :range => params[:range], :continent => params[:continent]
        redirect_to mountain_path(mountain.id)
    end
end