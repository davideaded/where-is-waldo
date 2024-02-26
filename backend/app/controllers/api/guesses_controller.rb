class Api::GuessesController < ApplicationController
  before_action :set_characters

  def index
    character_guess = format_name
    guess_coords = { x: params[:x].to_f, y: params[:y].to_f }

    result = within_guessing_character?(guess_coords, @characters[character_guess])
    render json: result
  end

  private

  def format_name
    params[:character_guess].downcase.gsub(' ', '_').to_sym
  end

  def set_characters
    @characters = {
      guts: { x: 716.4, y: 1936 },
      bender: { x: 1368.4, y: 1501 },
      pyramid_head: { x: 546.4, y: 783 }
    }
  end

  def within_guessing_character?(player_guess, guessing_character)
    square_size = 56
    x = guessing_character[:x] -= square_size / 2
    y = guessing_character[:y] -= square_size / 2
    px = player_guess[:x]
    py = player_guess[:y]

    return px >= x &&
           px <= x + square_size &&
           py >= y &&
           py <= y + square_size
  end

  def guess_params
    params.permit(:character_guess, :x, :y)
  end
end
