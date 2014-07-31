$(document).ready(function () {

  app.templates = {
  	navigation: $('#navigation-template').html(),
    // userView: $('#user-template').html(),
    // flightView: $('#flight-template').html(),
    // reservationsView: $('#reservation-template').html(),
    planeView: $('#plane-template').html(),
    planeListView: $('#plane-list-template').html()
  }

  app.router = new app.Router();
  Backbone.history.start();
  console.log('main.js ready (last)');
});