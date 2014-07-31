# == Schema Information
#
# Table name: users
#
#  id                    :integer          not null, primary key
#  admin                 :boolean          default(FALSE)
#  name                  :text
#  password_confirmation :text
#  created_at            :datetime
#  updated_at            :datetime
#

class User < ActiveRecord::Base
  has_secure_password
	has_many :reservations
  has_many :flights, through: :reservations
end
