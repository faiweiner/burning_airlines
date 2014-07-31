var app = app || {};

$(document).ready(function(){
  app.templates = {
    appView: $('#plane-app-template').html(),
    planeListView: $('#plane-list-template').html(),
    planeView: $('#plane-template').html(),
    planeAddView: $('#plane-add-template').html(),
  };


  app.router = new app.Router();

});