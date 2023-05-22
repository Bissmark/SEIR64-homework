class ManufacturersController < ApplicationController
  def index
    @manufacturers = Manufacturer.all
  end

  def new
    @manufacturer = Manufacturer.new
  end
  
  def create
    manufacturer = Manufacturer.create manufacturer_params
    redirect_to manufacturer
  end

  def edit
    @manufacturer = Manufacturer.find params[:id]
  end

  def update
    manufacturer = Manufacturer.find params[:id]
    manufacturer.update manufacturer_params
    redirect_to manufacturer
  end

  def show
    @manufacturer = Manufacturer.find params[:id]
  end

  def destroy
    manufacturer = Manufacturer.find params[:id]
    manufacturer.destroy
    redirect_to manufacturers_path
  end

  private

  def manufacturer_params
    params.require(:manufacturer).permit(:name, :founder, :founded, :origin, :image)
  end
end
