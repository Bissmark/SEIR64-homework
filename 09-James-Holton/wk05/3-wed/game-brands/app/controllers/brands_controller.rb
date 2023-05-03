class BrandsController < ApplicationController
  def index
    @brands = Brand.all
  end

  def new
    @brand = Brand.new
  end

  def create
    brand = Brand.create brand_params
    redirect_to brand
  end

  def edit
    @brand = Brand.find params[:id]
  end

  def update
    brand = Console.find params[:id]
    brand.update work_params
    redirect_to brand
  end

  def show
    @brand = Brand.find params[:id]
  end

  def destroy
    brand = Brand.find params[:id]
    brand.destroy
    redirect_to brands_path
  end

  private
  def brand_params
    params.require(:brand).permit(:name, :founded, :based, :net, :image)
  end
end
