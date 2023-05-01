class FridgesController < ApplicationController
    def index 
        @fridges = Fridge.all
    end


    def show
        @fridge = Fridge.find params[:id]
    end

    def new
    end

    def create
        fridge = Fridge.create :brand => params[:brand], :model => params[:model], :image => params[:image], :color => params[:color], :volumn => params[:volumn], :weight => params[:weight], :energy => params[:energy]
        redirect_to fridges_path(fridge.id)
    end

    def edit
        @fridge = Fridge.find params[:id]
    end

    def update
        fridge = Fridge.find params[:id]
        fridge.update :brand => params[:brand], :model => params[:model], :image => params[:image], :color => params[:color], :volumn => params[:volumn], :weight => params[:weight], :energy => params[:energy]
        redirect_to fridge_path(fridge.id)
    end

    def destroy
        fridge = Fridge.find params[:id]
        fridge.destroy
        redirect_to fridges_path
    end

end
