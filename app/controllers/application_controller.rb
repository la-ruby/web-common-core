class ApplicationController < ActionController::Base
  include Pundit
  before_action :authenticate_user!
  after_action :verify_authorized, except: [:index, :page_two], unless: :devise_controller?
  after_action :verify_policy_scoped, only: [:index, :page_two], unless: :devise_controller?
end
