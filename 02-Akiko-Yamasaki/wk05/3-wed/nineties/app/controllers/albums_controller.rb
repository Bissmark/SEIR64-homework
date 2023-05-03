class AlbumsController < ApplicationController
  def index
    @albums = Album.all
  end

  def new
    @album = Album.new
  end

  def create
    album = Album.create album_params
    redirect_to album
  end

  # this is not working
  def edit
    @album = Album.find params[:id]
  end

  def update
    album = ALbum.find params[:id]
    album.update album_params
    redirect_to album
  end

  def show
    @album = Album.find params[:id]
  end

  def destroy
    album = Album.find params[:id]
    album.destroy
    redirect_to albums_path
  end

  private
  def album_params
    params.require(:album).permit(:title, :year, :single, :image)
  end
end
