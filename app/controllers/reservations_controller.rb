class ReservationsController < ApplicationController

  def index
    @reservations = Reservation.all
    respond_to do |format|
      format.html {}
      format.json{ render :json => @reservations}
    end
  end

  def create
  end

  def show
  end

  def update
  end

  def destroy
  end

end