class PlanesController < ApplicationController
	def index
		@planes = Plane.all
	end

	def new
		@plane = Plane.new
	end

	def create
		@plane = Plane.create(:name => params[:name], :aisles => params[:aisles], :rows => params[:rows])
		respond_to do |format|
  		format.html {}
  		format.json { render :json => @plane }
  	end
	end

	def update
		@plane = Plane.find params[:id]
		@plane.name = params[:name]
		@plane.aisles = params[:aisles]
		@plane.rows = params[:rows]
		@plane.save
	end

	def destroy
		@plane = Plane.find params[:id]
		@plane.destroy
	end
end