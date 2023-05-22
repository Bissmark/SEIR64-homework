class CarmodelsController < ApplicationController
  def index
    @carmodels = Carmodel.all
  end

  def new
    @carmodel = Carmodel.new
  end

  def create
    carmodel = Carmodel.create carmodel_params
    redirect_to carmodel
  end

  def edit
    @carmodel = Carmodel.find params[:id]
  end

  def update
    carmodel = Carmodel.find params[:id]
    carmodel.update carmodel_params
    redirect_to carmodel
  end

  def show
    @carmodel = Carmodel.find params[:id]
  end

  def destroy
    carmodel = Carmodel.find params[:id]
    carmodel.destroy
    redirect_to carmodels_path
  end

  private 
  def carmodel_params
    params.require(:carmodel).permit(:name, :image)
  end
end
