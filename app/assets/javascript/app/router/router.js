var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 										'index',					// homepage
    'planes': 							'planes',
    'planes(/:id)': 				'planes',
    'planes/:query': 				'searchPlane',
    'flights':              'flights',
    'flights/:id':          'flight',
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
    app.flights = new app.Flights();
    app.flights.fetch().done(function (){
      var flightsView = new app.FlightsView({collection: app.flights});
      console.log("flights route");
      flightsView.render();
    });
  },
  flight: function (id) {
      var flight = new app.Flight({id: id});
      console.log(id);

      flight.fetch().done(function () {
        console.log(flight);
        console.log("flight route");
        var flightView = new app.FlightView({model: flight});
        flightView.render();
      });

  },
  reservations: function () {
    var reservations = new app.Reservations();
    reservations.fetch().done(function (){
      var reservationView = new app.ReservationView({collection: reservations});
      console.log('reservations route');
      reservationView.render();
    });
  },
  user: function () {
    var usersView = new app.UsersView({collection: users});
    console.log('users route')
    usersView.render();
  }
});
