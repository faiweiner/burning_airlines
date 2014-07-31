class UsersController < ApplicationController
  def index
    @users = Users.all
    respond_to do |format|
      format.html {}
      format.json{ render :json => @users }
    end
  end

  def create
    @user = Users.create user_params
    render :json => @user
  end

  def update
    @user = User.find params[:id]
    @user.update user_params
    render :json => @user
    @user.save
  end

  def destroy
  end

  private
    def user_params
      params.require(:admin => params[:admin], :name => params[:name], :password => params[:password], :password_confirmation => params[:password_confirmation])
    end

end
