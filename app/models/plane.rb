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

class Plane < ActiveRecord::Base
	has_many :flights
	def seat_count
		self.aisles * self.rows
	end
end
