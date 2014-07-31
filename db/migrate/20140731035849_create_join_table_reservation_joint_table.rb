class CreateJoinTableReservationJointTable < ActiveRecord::Migration
  def change
    create_join_table :flights, :users do |t|
      # t.index [:flight_id, :user_id]
      # t.index [:user_id, :flight_id]
      t.integer :flight_id
      t.integer :user_id
    end
  end
end
