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

class Flight < ActiveRecord::Base
	belongs_to :plane
	has_many :reservations
	has_many :users, through: :reservations
end
