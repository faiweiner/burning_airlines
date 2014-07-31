var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#main',

  events: {
    'click #create-user': 'createUser',
    'click #create-airplane': 'createAirplane',
    'click #create-flight': 'createFlight',
    'click #create-reservation': 'createReservations'
  },

  initialize: function () {
    var planeView = new app.planeView();
    var planeListView = new app.planeListView();
    console.log('initialize.appView');
  },

  render: function () {
    console.log('render.appView');
    this.$el.html( app.templates.navigation );
    return this;
  }



  // createUser: function () {
  //   var userView = new app.UserView();
  //   userView.render();

  // },

  // createAirplane: function () {
  //   var airplaneView = new app.AirplaneView();
  //   airplaneView.render();

  // },

  // createFlight: function () {
  //   var flightView = new app.FlightView();
  //   flightView.render();

  // },

  // createReservations: function () {
  //   var reservationsView = new app.ReservationsView();
  //   reservationsView.render();

  // }

});