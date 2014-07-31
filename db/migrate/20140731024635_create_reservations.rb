class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.date :date
      t.integer :flight_id
      t.timestamps
    end
  end
end
