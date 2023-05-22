class AnimesController < ApplicationController
  def index
    @animes = Anime.all
  end

  def new
    @anime = Anime.new
  end

  def create
    anime = Anime.create anime_params
    redirect_to anime
  end

  def edit
    @anime = Anime.find params[:id]
  end

  def update
    anime = Anime.find params[:id]
    anime.update anime_params
    redirect_to anime
  end

  def show
    @anime = Anime.find params[:id]
  end

  def destroy
    anime = Anime.find params[:id]
    anime.destroy
    redirect_to animes_path
  end

  private 
  def anime_params
    params.require(:anime).permit(:name, :synonyms, :aired, :status, :description, :image)
  end
end
