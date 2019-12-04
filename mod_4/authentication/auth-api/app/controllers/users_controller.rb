class UsersController < ApplicationController 

def index 
    @users = User.all
    if @users
        render json: {
            users: @users
        }
    else 
        render json: {
            status: 500,
            errors: ['not found']
        }
    end
end

def show 
    @user = User.find(params[:id])
    if @user
        render json: {
            user: @user
        }
    else 
        render json: {
            status: 500,
            errors: ['these are not the droids you are looking for']
        }
    end
end

def create  
    @user = User.new(user_params)
    if @user.save
        # What the hell is the ! for?
        login!
        render json: {
            status: :created,
            user: @user
        }
    else 
        render json: {
            status: 500, 
            errors: @user.errors.full_messages
        }
    end
end

def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
end

end
