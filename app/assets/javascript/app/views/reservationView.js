var app = app || {};

app.ReservationView = Backbone.View.extend({
  tagName: '#main',
  events:{
    'click': 'setReservation'
  },
  initialize: function () {
    console.log('show all reservations');
    this.render();
  },

  render: function () {
    var list_html = Handlebars.compile(app.templates.allReservationsTemplate);
    var copy = list_html( this.collection.toJSON() );
    console.log("rendering reservations..")
  },

  setReservation: function () {
    // something has to go here that makes clicky seaty thingys work..
  }
});