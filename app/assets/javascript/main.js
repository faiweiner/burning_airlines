$(document).ready(function () {

  app.templates = {
  	navigation: $('#navigation-template').html(),
    // userView: $('#user-template').html(),
    // flightView: $('#flight-template').html(),
    // reservationsView: $('#reservation-template').html(),
    planeTemplate: $('#plane-template').html(),
    planeListTemplate: $('#plane-list-template').html(),
    createPlane: $('#create-plane-template').html()
  }

  app.router = new app.Router();
  Backbone.history.start();
  console.log('main.js ready (last)');
});