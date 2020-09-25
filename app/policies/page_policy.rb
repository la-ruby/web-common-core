class PagePolicy < Struct.new(:user, :page)

  def dashboard?
    user.present?
  end

end
