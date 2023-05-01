class ConsolesController < ApplicationController
  def index
    @consoles = Console.all
  end

  def new
    @console = Console.new
  end

  def create
    console = Console.create console_params
    redirect_to console
  end

  def edit
    @console = Console.find params[:id]
  end

  def update
    console = Console.find params[:id]
    console.update work_params
    redirect_to console
  end

  def show
    @console = Console.find params[:id]
  end

  def destroy
    console = Console.find params[:id]
    console.destroy
    redirect_to consoles_path
  end

  private
  def console_params
    params.require(:console).permit(:name, :brand, :rd, :units, :play, :image)
  end
end
