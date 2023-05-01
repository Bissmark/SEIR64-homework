class exhibitsController < ApplicationController
  def index
    @exhibits = Exhibit.all
  end

  def new
    @exhibit = Exhibit.new
  end

  def create
    exhibit = Exhibit.create exhibit_params
    redirect_to exhibit 
  end

  def edit
    @exhibit = Exhibit.find params[:id]
  end

  def update
    exhibit = Exhibit.find params[:id]
    exhibit.update exhibit_params
    redirect_to exhibit
  end

  def show
    @exhibit = Exhibit.find params[:id]
  end

  def destroy
    exhibit = Exhibit.find params[:id]
    exhibit.destroy
    redirect_to exhibit

  private
  def exhibit_params
    params.require(:exhibit).permit(:title, :year, :medium, :style, :image)
end
end