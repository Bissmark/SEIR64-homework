class WrestlersController < ApplicationController
  def index
    @wrestlers = Wrestler.all 
  end

  def new
    @wrestler = Wrestler.new
  end

  def create
    wrestler = Wrestler.create wrestler_params
    redirect_to wrestler 
  end

  def edit
    @wrestler = Wrestler.find params[:id]
  end

  def update
    wrestler = Wrestler.find params[:id]
    wrestler.update wrestler_params
    redirect_to wrestler
  end

  def show
    @wrestler = Wrestler.find params[:id]
  end

  def destroy
    wrestler = Wrestler.find params[:id]
    wrestler.destroy
    redirect_to wrestlers_path
  end

  private

  def wrestler_params
    params.require(:wrestler).permit(:name, :image, :country, :height, :weight, :exp)
  end

end
