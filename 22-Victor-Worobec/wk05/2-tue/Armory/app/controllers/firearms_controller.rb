class FirearmsController < ApplicationController
    
    def home
        
    end

    def index
        @firearms = Firearm.all
    end

    def new
        
    end

    def create
        firearm = Firearm.create :model => params[:model], :manufacturer => params[:manufacturer], :calibre => params[:calibre], :family => params[:family], :fire_rate => params[:fire_rate], :effective_distance => params[:effective_distance], :image => params[:image]
        redirect_to firearm_path(firearm.id)
    end

    def show
        @firearm = Firearm.find params[:id]
    end

    def edit
        @firearm = Firearm.find params[:id]
    end

    def update
        firearm = Firearm.find params[:id]
        firearm.update :model => params[:model], :manufacturer => params[:manufacturer], :calibre => params[:calibre], :family => params[:family], :fire_rate => params[:fire_rate], :effective_distance => params[:effective_distance], :image => params[:image]
        redirect_to firearm_path(firearm.id)
    end

    def delete
        firearm = Firearm.find params[:id]
        firearm.destroy
        redirect_to firearms_path
    end
end