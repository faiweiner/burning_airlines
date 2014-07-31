var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  defaults: {
  	plane_id: 0,
    name: '747',
    origin: 'Sydney',
    destination: 'San Francisco'
  }
});