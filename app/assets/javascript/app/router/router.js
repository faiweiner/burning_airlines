var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 										'index',					// homepage
    'planes': 							'planes',
    'planes(/:id)': 				'planes',
    'planes/:query': 				'searchPlane',
    'flights':              'flights',
    // 'flights(/:id)':        'flights',
    'flights/:id':          'flights',
    'reservations':         'reservations',
    'users':                'users'
  },

  index: function () {
    var appView = new app.AppView();
    appView.render();
  },

  planes: function () {
  	console.log("planes route");
    var planePortalView = new app.PlanePortal();
    planePortalView.render();
  },

  searchPlane: function () {
  	console.log('search plane');
  },

  flights: function () {
    var flights = new app.Flights();
    flights.fetch().done(function (){
      var flightsView = new app.FlightsView({collection: flights});
      console.log("flights route");
      flightsView.render();
    });
  },
  reservations: function () {
    app.reservations = new app.Reservations();
    app.reservations.fetch().done(function (){
      console.log('reservations route');
      var reservationView = new app.ReservationView({model: app.reservations});
      reservationView.render();
    });
  },
  user: function () {
    var usersView = new app.UsersView({collection: users});
    console.log('users route')
    usersView.render();
  }
});
