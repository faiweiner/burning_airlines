var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'planes',
    'planes/:id': 'getPlane',
    'flights/:id': 'getFlight'
  },
  initialize: function () {
    console.log("router initialized");
    app.planes = new app.Planes();
    console.log("got planes");
    app.flights = new app.Flights();
    console.log("got flights");
    // app.flights.fetch();
    app.planes.fetch().done(function (){
    Backbone.history.start();
    });
  },
  planes: function () {
    console.log('you reached index');
    var appView = new app.AppView({collection: app.planes});
    appView.render();
  },
  getPlane: function (id) {
    var appView = new app.AppView({collection: app.planes});
    appView.render();
    var plane = app.planes.get(id);
    new app.PlaneView({model: plane});
  },
  getFlight: function (id) {
    var flight = app.flights.get(id);
    new app.FlightView({model: flight});
  }
});