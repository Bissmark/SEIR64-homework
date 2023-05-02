class ShapesController < ApplicationController
    def index
        @shapes = Shape.all
    end

    def show
        @shape = Shape.find params[:id]
    end

    def new
    end

    def create
        shape = Shape.create :name => params[:name], :corners => params[:corners], :edges => params[:edges]
        redirect_to shape_path(shape.id)
    end

    def edit
        @shape = Shape.find params[:id]
    end

    def update
        shape = Shape.find params[:id]
        shape.update :name => params[:name], :corners => params[:corners], :edges => params[:edges]
        redirect_to shape_path(shape.id)
    end

    def destroy 
        shape = Shape.find params[:id]
        shape.destroy
        redirect_to shapes_path
    end

end