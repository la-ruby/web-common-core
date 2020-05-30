require 'test_helper'

class GalleryControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get gallery_index_url
    assert_response :success
  end

  test "should get page_two" do
    get gallery_page_two_url
    assert_response :success
  end

end
