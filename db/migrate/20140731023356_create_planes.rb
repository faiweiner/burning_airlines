class CreatePlanes < ActiveRecord::Migration
  def change
    create_table :planes do |t|
    	t.text :name
    	t.integer :aisles
    	t.integer :rows
    	t.integer :total_seats
      t.timestamps
    end
  end
end
