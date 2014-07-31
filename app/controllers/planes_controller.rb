class PlanesController < ApplicationController
	def index
		@planes = Plane.all
	end

	def create
		@plane = Plane.create(:name => params[:name], :aisles => params[:aisles], :rows => params[:rows])
		respond_to do |format|
  		format.html {}
  		format.json { render :json => @plane }
  	end
	end

	def search

	end
end