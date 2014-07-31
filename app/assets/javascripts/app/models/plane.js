var app = app || {};

app.Plane = Backbone.Model.extend({
  urlRoot: '/planes',
  defaults: {
    name: '747',
    aisle: 'A',
    row: 10,
    seat_count: 0 ,
  }
});