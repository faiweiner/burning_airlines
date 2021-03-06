class ReservationsController < ApplicationController

  def index
    @reservations = Reservation.all
    respond_to do |format|
      format.html {}
      format.json{ render :json => @reservations}
    end
  end

  def show
    @reservation = Reservation.find params[:id]
  end

  def new
    @reservation = Reservation.new
  end

  def create
    @reservation = Reservation.create reservation_params
    @reservation.save
    render :json => @reservation
  end

  def update
    @reservation = Reservation.find params[:id]
    @reservation.update reservation_params
    render :json => @reservation
    @user.save
  end

  def destroy
    @reservation = Reservation.find params[:id]
    @reservation.destroy
    root_to reservation_path # ROUTE TO BE CHANGED TO CORRECT PATH
  end

  private
  def reservation_params
    params.require(:user_id => params[:user_id], :date => params[:date], :flight_id => params[:flight_id])
  end

end