Plane.destroy_all
Flight.destroy_all
Reservation.destroy_all
User.destroy_all

Plane.create(:name => '747', :aisles => 10, :rows => 10)
Plane.create(:name => 'Fai Air', :aisles => 5, :rows => 30)
Plane.create(:name => 'Tom Express', :aisles => 4, :rows => 26)
Plane.create(:name => 'Richie Rich', :aisles => 10, :rows => 50)
Plane.create(:name => 'Ros Flies', :aisles => 10, :rows => 20)

Flight.create(:plane_id => Plane.where(name: 'Fai Air').id, :name => 'Fai Air 999', :origin => 'Sydney', :destination => 'San Francisco' )
Flight.create(:plane_id => Plane.where(name: 'Tom Express').id, :name => 'Tom Express 80', :origin => 'Sydney', :destination => 'London' )
Flight.create(:plane_id => Plane.where(name: '747').id, :name => '747 201', :origin => 'London', :destination => 'Detroit' )
Flight.create(:plane_id => Plane.where(name: 'Richie Rich').id, :name => 'Richie Rich 201', :origin => 'Sydney', :destination => 'Bangkok' )
Flight.create(:plane_id => Plane.where(name: 'Ros Flies').id, :name => 'Ros Flies 201', :origin => 'Sydney', :destination => 'Honolulu' )
