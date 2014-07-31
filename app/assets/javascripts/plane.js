var app = app || {};

$(document).ready(function(){
  app.templates = {
    appView: $('#app-template').html(),
    planeListView: $('#list-template').html(),
    planeView: $('#plane-template').html(),
  };

  app.router = new app.Router();

});