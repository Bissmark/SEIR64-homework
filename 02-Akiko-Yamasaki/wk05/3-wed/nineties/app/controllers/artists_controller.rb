class ArtistsController < ApplicationController
  def index
    @artists = Artist.all 
  end

  def new
    @artist = Artist.new
  end

  def create
    artist = Artist.create artist_params
    redirect_to artist
  end

  def edit
    @artist = Artist.find params[:id]
  end

  def show
    @artist = Artist.find params[:id]
  end

  def destroy
    artist = Artist.find params[:id]
    artist.destroy
    redirect_to artists_path
  end

  private
  def artist_params
    params.require(:artist).permit(:name, :city, :formed, :reformed, :image)
  end
end

