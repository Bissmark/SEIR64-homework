class AsteroidsController < ApplicationController
    def index
        @asteroids = Asteroid.all
    end

    def show
        @asteroid = Asteroid.find params[:id]
    end

    def new
        #don't need anything else here because Rails real fancy
    end

    def create
        asteroid = Asteroid.create :name => params[:name], :designation => params[:designation], :image => params[:image], :orbit => params[:orbit], :size => params[:size], :funfact => params[:funfact]
        redirect_to asteroid_path(asteroid.id)
    end

    def edit
        @asteroid = Asteroid.find params[:id]
    end

    def update
        asteroid = Asteroid.find params[:id]
        asteroid.update :name => params[:name], :designation => params[:designation], :image => params[:image], :orbit => params[:orbit], :size => params[:size], :funfact => params[:funfact]
        redirect_to asteroid_path(asteroid.id)
    end
    def destroy
        asteroid = Asteroid.find params[:id]
        asteroid.destroy
        redirect_to asteroids_path
    end
end