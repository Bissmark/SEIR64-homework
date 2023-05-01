class WrestlersController < ApplicationController
    def index
        @wrestlers = Wrestler.all 
    end

    def show
        @wrestler = Wrestler.find params[:id]
    end

    def new
    end

    def create
        wrestler = Wrestler.create :name => params[:name], :image => params[:image], :height => params[:height], :weight => params[:weight], :exp => params[:exp]
        redirect_to wrestler_path(wrestler.id)
    end

    def edit
        @wrestler = Wrestler.find params[:id]
    end

    def update
        wrestler = Wrestler.find params[:id]
        wrestler.update :name => params[:name], :image => params[:image], :height => params[:height], :weight => params[:weight], :exp => params[:exp]
        redirect_to wrestler_path(wrestler.id)
    end

    def destroy
        @wrestler = Wrestler.find params[:id]
        @wrestler.destroy
        redirect_to wrestlers_path
    end
end