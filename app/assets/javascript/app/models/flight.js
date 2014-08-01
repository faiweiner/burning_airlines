var app = app || {};

app.Flight = Backbone.Model.extend({
  url: '/flights',
  defaults: {
    plane_id: 0,
    name: '747 flight',
    origin: 'Sydney',
    destination: 'London'
  }
});

console.log('flight model success');