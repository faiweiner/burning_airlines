var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 										'index',					// homepage
    'planes': 							'planes',
    'planes(/:id)': 				'planes',
    'planes/:query': 				'searchPlane',
    'flights':              'flights'
    // 'flights(/:id)':        'flights'
  },

  index: function () {
    var appView = new app.AppView();
    appView.render();
  },

  planes: function () {
    var planeListView = new app.PlaneListView({collection: app.planes});
  	console.log("planes route");
    planeListView.render();
  },
  searchPlane: function () {
  	console.log('search plane');
  },
  flights: function () {
    var flightsView = new app.FlightsView({collection: app.flights});
    console.log("flights route");
    flightsView.render();
  }
});
