class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.boolean :admin
      t.text :name
      t.text :password
      t.text :password_confirmation
      t.timestamps
    end
  end
end
