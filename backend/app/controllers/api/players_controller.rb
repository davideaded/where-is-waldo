class Api::PlayersController < ApplicationController
  before_action :set_player, only: :show

  def index
    @players = Player.all
    render json: @players
  end

  def show
    render json: @player
  end

  def create
    @player = Player.new(player_params)

    if @player.save
      render json: @player, status: :created
    else
      render json: @player.errors, status: :unprocessable_entity
    end
  end

  private

  def set_player
    @player = Player.find(params[:id])
  end

  def player_params
    params.require(:player).permit(:name, :completion_time_in_seconds)
  end
end
