$(document).ready(function () {

  app.templates = {
  	navigation: $('#navigation-template').html(),
    // userView: $('#user-template').html(),
    // flightView: $('#flight-template').html(),
    allReservationsTemplate: $('#reservation-template').html(),
    // -- Plane-related templates -----------------
    planePortalTemplate: $('#plane-portal-template').html(),
    planeTemplate: $('#plane-template').html(),
    planeListTemplate: $('#plane-list-template').html(),
    createPlane: $('#create-plane-template').html(),

    // User-related templates -----------------------------

    userListTemplate: $('#user-list-template').html(),
    userTemplate: $('#user-template').html(),


    // -- Flight-related templates -----------------
    flightsTemplate: $('#flights-template').html(),
    flightTemplate: $('#flight-template').html(),
    createFlightTemplate: $('#create-flight-template').html()
  }

  app.router = new app.Router();
  Backbone.history.start();
  console.log('main.js ready (last)');
});