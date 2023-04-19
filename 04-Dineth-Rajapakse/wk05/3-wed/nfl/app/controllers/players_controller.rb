class PlayersController < ApplicationController
  def index
    @players = Player.all
  end

  def new
  end

  def edit
  end

  def show
  end
end
