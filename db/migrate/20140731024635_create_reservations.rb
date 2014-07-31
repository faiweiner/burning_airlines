class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.user_id :interger
      t.date :date
      t.flight_id :integer
      t.timestamps
    end
  end
end
