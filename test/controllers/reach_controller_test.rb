require "test_helper"

class ReachControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get reach_index_url
    assert_response :success
  end

  test "should get show" do
    get reach_show_url
    assert_response :success
  end
end
