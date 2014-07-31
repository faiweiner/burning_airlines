class ChangeDate < ActiveRecord::Migration
  def change
    add_column :flights, :date, :date
    remove_column :reservations, :date
  end
end
