var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#planes',

  events: {
    'click button': 'createFlight'
  },

  initialize: function () {
    this.render();
    console.log('from flight view');
  },

  render: function () {
    var flightTemplate = Handlebars.compile(app.templates.flightTemplate);
    var copy = flightTemplate( this.model.toJSON() );

    this.$el.html( copy );
  },

  createFlight: function () {
    var newFlight = new app.Flight( {name: $('#name').val(), origin: $('#origin').val(), destination: $('#destination').val(), date: $('#date')} );
    newPlane.save();
    console.log('new plane ready to get saved');
  }

});