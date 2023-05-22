class WinesController < ApplicationController
    def index 
        @wines = Wine.all
    end

    def new 
    end

    def show 
        @wine = Wine.find params[:id]
    end

    def create
        wine = Wine.create :name => params[:name], :image => params[:image], :region => params[:region], :main_varietal => params[:main_varietal], :color => params[:color]
        redirect_to wine_path(wine.id)
    end

    def edit 
        @wine = Wine.find params[:id]
    end

    def update
    wine = Wine.find params[:id]
    wine.update :name => params[:name], :image => params[:image], :region => params[:region], :main_varietal => params[:main_varietal], :color => params[:color]
    redirect_to wine_path(wine.id)
    end

    def destroy 
        wine = Wine.find params[:id]
        wine.destroy 
        redirect_to wines_path
    end

end