var app = app || {};

app.ReservationView = Backbone.View.extend({
  el: '#reservations',
  events:{
    'click': 'setReservation'
  },
  initialize: function () {
    this.render();
    console.log('from reservation view');
  },

  render: function () {
    var reservationTemplate = Handlebars.compile(app.templates.allReservationsTemplate);
    var copy = reservationTemplate( this.collection.toJSON() );
    console.log("rendering reservations..");
    this.$el.html( copy );
  },

  setReservation: function () {
    // something has to go here that makes clicky seaty thingys work..
  }
});