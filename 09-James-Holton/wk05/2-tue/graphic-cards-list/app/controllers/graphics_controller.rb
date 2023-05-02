class GraphicsController < ApplicationController
    def index
        @graphics = Graphic.all
    end

    def show
        @graphic = Graphic.find params[:id]
    end

    def new
    end

    def create
        graphic = Graphic.create :name => params[:name], :release => params[:release], :bus => params[:bus], :memory_size => params[:memory_size], :memory_type => params[:memory_type], :gpu_clock => params[:gpu_clock], :memory_clock => params[:memory_clock]
        redirect_to graphic_path(graphic.id)
    end

    def edit
        @graphic = Graphic.find params[:id]
    end

    def update
        graphic = Graphic.find params[:id]
        graphic.update :name => params[:name], :release => params[:release], :bus => params[:bus], :memory_size => params[:memory_size], :memory_type => params[:memory_type], :gpu_clock => params[:gpu_clock], :memory_clock => params[:memory_clock]
        redirect_to graphic_path(graphic.id)
    end

    def destroy
        graphic = Graphic.find params[:id]
        graphic.destroy
        redirect_to graphics_path
    end
end
