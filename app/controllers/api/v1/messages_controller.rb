class Api::V1::MessagesController < ApplicationController
  def index
    message = Message.order('Random()').first
    render json: { message: message.greetings_text }
  end
end
