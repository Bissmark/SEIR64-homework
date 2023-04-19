class ForestsController < ApplicationController
    def index
        @forests = Forest.all
    end

    def new
    end

    def show
        @forest = Forest.find params[:id]
    end
    
    def create
        forest = Forest.create :name => params[:name], :image => params[:image], :country => params[:country], :plants => params[:plants], :weather => params[:weather]
        redirect_to forest_path(forest.id)
    end

    def edit
        @forest = Forest.find params[:id]
    end

    def update
        forest = Forest.find params[:id]
        forest.update :name => params[:name], :image => params[:image], :country => params[:country], :plants => params[:plants], :weather => params[:weather]
        redirect_to forest_path(forest.id)
    end

    def destroy
        forest = Forest.find params[:id]
        forest.destroy
        redirect_to forests_path
    end
end