# == Schema Information
#
# Table name: planes
#
#  id          :integer          not null, primary key
#  name        :text
#  aisles      :integer
#  rows        :integer
#  total_seats :integer
#  created_at  :datetime
#  updated_at  :datetime
#

require 'test_helper'

class PlaneTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
