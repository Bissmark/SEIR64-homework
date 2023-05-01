class FlagsController < ApplicationController
  def index
    @flags = Flag.all
  end

  def new
    @flag = Flag.new
  end

  def create
    flag = Flag.create flag_params
    redirect_to flag_path(flag.id)
  end

  def edit
    @flag = Flag.find params[:id]
  end

  def update
    flag = Flag.find params[:id]
    flag.update flag_params
    redirect_to flag
  end

  def show
    @flag = Flag.find params[:id]
  end

  def destroy
    flag = Flag.find params[:id]
    flag.destroy
    redirect_to flags_path
  end

  private
  def flag_params
    params.require(:flag).permit(:image, :adoption_date, :state, :design)
  end

end
