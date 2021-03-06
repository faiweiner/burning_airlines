class FlightsController < ApplicationController
	def index
		@flights = Flight.all
		respond_to do |format|
			format.html {}
			format.json{ render :json => @flights }
		end
	end

	def show
		@flight = Flight.find params[:id]
		respond_to do |format|
			format.html {}
			format.json{ render :json => @flight }
		end
	end

	def new
		@flight = Flight.new
	end

	def create
		@flight = Flight.create(:name => params[:name], :origin => params[:origin], :destination => params[:destination])
		@flight.save
		respond_to do |format|
			format.html {}
			format.json { render :json => @flight }
		end
	end

	def update
		@flight = Flight.find params[:id]
		@flight.name = params[:name]
		@flight.aisles = params[:aisles]
		@flight.rows = params[:rows]
		@flight.save
	end

	def destroy
		@flight = Flight.find params[:id]
		@flight.destroy
	end

	def search
		# search by name of flight
		if params[:name].present?
			@flight = Flight.where(:name => params[:name])
		# search by origin OR destination
		elsif params[:origin].present? || params[:destination].present?
			@origin = Flight.where(:origin => params[:origin])
			@destination = Flight.where(:destination => params[:destination])
		else
			flash[:notice] = "No flight matching search parameters"
		end
	end
end