class CountriesController < ApplicationController

  def new
    @country = Country.new
  end

  def create
    country = Country.create country_params
    redirect_to countries_path
  end

  def index
    @countries = Country.all
  end

  def edit
    @country = Country.find params[:id]
  end

  def update
    country = Country.find params[:id]
    country.update country_params
    redirect_to country
  end

  def show
    @country = Country.find params[:id]
  end

  def destroy
    country = Country.find params[:id]
    country.destroy
    redirect_to countries_path
  end

  private
  def country_params
    params.require(:country).permit(:name, :population, :capital, :states, :image)
  end


end
