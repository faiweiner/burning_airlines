# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  plane_id    :integer
#  name        :text
#  origin      :text
#  destination :text
#  created_at  :datetime
#  updated_at  :datetime
#

require 'test_helper'

class FlightTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
