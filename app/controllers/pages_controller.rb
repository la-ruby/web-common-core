class PagesController < ApplicationController
  after_action :verify_authorized

  # users end up here after logging in
  def dashboard
    authorize :page, :dashboard?
  end
end
