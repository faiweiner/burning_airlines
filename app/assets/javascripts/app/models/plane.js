var app = app || {};

app.Plane = Backbone.Model.extend({
  urlRoot: '/planes',
  defaults: {
    name: '747',
    aisles: 10,
    rows: 10,
    seat_count: 0 ,
  }
});