class ConfectioneriesController < ApplicationController
  def index
    @confectioneries = Confectionery.all
  end

  def new
    @confectionery = Confectionery.new
  end

  def create
    confectionery = Confectionery.create confectionery_params
    redirect_to confectionery
  end

  def edit
    @confectionery = Confectionery.find params[:id]
  end

  def show
    @confectionery = Confectionery.find params[:id]
  end

  def update
    confectionery = Confectionery.find params[:id]
    confectionery.update confectionery_params
    redirect_to confectionery
  end

  def destroy
    confectionery = Confectionery.find params[:id]
    confectionery.destroy
    redirect_to confectioneries_path
  end

  private

  def confectionery_params
    params.require(:confectionery).permit(:name, :group, :energy, :protein, :fat, :carbs, :image)
  end
end
