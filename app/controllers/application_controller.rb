class ApplicationController < ActionController::Base
  include Pundit
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  def user_not_authorized
    if current_user
      redirect_to pages_dashboard_path
    else
      redirect_to new_user_session_path
    end
  end
end
