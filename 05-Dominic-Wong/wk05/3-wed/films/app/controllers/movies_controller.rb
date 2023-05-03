class MoviesController < ApplicationController
	def new
		@movie = Movie.new
	end
	
	def create
		movie = Movie.create movie_params
		redirect_to movie
	end

	def show
		@movie = Movie.find params[:id]
	end

	def index
		@movies = Movie.all
	end

	def edit
		@movie = Movie.find params[:id]
	end

	def update
		movie = Movie.find params[:id]
		movie.update movie_params
		redirect_to movie
	end

	def destroy
		movie = Movie.find params[:id]
		movie.destroy
		redirect_to movies_path
	end

	private

	def movie_params
		params.require(:movie).permit(:name, :image, :release, :box_office, :genre)
	end
end
