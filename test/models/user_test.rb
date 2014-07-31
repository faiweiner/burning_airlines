# == Schema Information
#
# Table name: users
#
#  id                    :integer          not null, primary key
#  admin                 :boolean
#  name                  :text
#  password              :text
#  password_confirmation :text
#  created_at            :datetime
#  updated_at            :datetime
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
