var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  initialize: function () {
    console.log('AppView Initialized');
  },
  render: function () {
    // Rendering the App onto the page
    this.$el.html(app.templates.appView);
    app.planes.each(function (p) {
      var planeListView = new app.PlaneListView({model: p
      });
      $('#planes').append( planeListView.render() );
    });
    app.flights.each(function (f) {
      var flightListView = new app.FlightListView({model: f
      });
      $('#flights').append( flightListView.render() );
    });
  }
});