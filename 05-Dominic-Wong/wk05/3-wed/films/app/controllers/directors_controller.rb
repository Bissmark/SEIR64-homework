class DirectorsController < ApplicationController
	def index
		@directors = Director.all
	end

	def new
		@director = Director.new
	end

	def create
		director = Director.create director_params
		redirect_to director
	end

	def edit
	end

	def show
		@director = Director.find params[:id]
	end

	private

	def director_params
		params.require(:director).permit(:name, :dob, :years, :nationality, :image)
	end
end
