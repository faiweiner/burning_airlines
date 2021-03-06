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

  plane: function () {
    var plane = new app.Plane({id: id});
    debugger;
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
      app.planes = new app.Planes();
      app.planes.fetch().done(function () {

        console.log(id);

        flight.fetch().done(function () {
          console.log('the flight', flight);
          console.log("flight route");
          var flightView = new app.FlightView({model: flight});
          flightView.render();
        });
      });

  },

  reservations: function () {
    app.reservations = new app.Reservations();
    app.reservations.fetch().done(function (){
      console.log('reservations route');
      var reservationsView = new app.ReservationsView({collection: app.reservations});
      reservationsView.render();
    });
  },
  user: function () {
    var usersView = new app.UsersView({collection: users});
    console.log('users route')
    usersView.render();
  }
});
