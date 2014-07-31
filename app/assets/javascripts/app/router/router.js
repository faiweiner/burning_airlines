var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'planes',
    // '': 'nav',
    'planes/:id': 'getPlane',
    'flights/:id': 'getFlight'
  },
  initialize: function () {
    console.log("router initialized");
    app.planes = new app.Planes();
    console.log("got planes");
    app.flights = new app.Flights();
    console.log("got flights");
    app.flights.fetch();
    app.planes.fetch().done(function (){
    Backbone.history.start();
    });
  },
  // nav: function () {
  //   console.log('get Nav');
  //   var navView = new app.NavView();
  //   navView.render();
  // },

  planes: function () {
    console.log('you reached planes index');
    var appView = new app.AppView({collection: app.planes});
    appView.render();
  },

  getPlane: function (id) {
    var appView = new app.AppView({collection: app.planes});
    appView.render();
    var plane = app.planes.get(id);
    new app.PlaneView({model: plane});
  },


  flights: function () {
    console.log('you reached flights index');
    var appView = new app.AppView({collection: app.flights});
    appView.render();
  },

  getFlight: function (id) {
    var appView = new app.AppView({collection: app.flights});
    appView.render();
    var plane = app.flights.get(id);
    new app.PlaneView({model: plane});
  }


});