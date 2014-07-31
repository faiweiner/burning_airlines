var app = app || {};

$(document).ready(function(){
  app.templates = {
    navView: $('#nav-template').html(),
    appView: $('#plane-app-template').html(),
    planeListView: $('#plane-list-template').html(),
    planeView: $('#plane-template').html()
  };

  app.router = new app.Router();

});
