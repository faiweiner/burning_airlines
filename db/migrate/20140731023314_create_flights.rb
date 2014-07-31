class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
    	t.integer :plane_id
    	t.text :name
    	t.text :origin
    	t.text :destination
      t.timestamps
    end
  end
end
