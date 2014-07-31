var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: '/reservations',
  defaults: {
    user_id: '',
    flight_id: '0'
  },
});

console.log('reservation model success');