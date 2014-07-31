var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  initialize: function () {
    this.render();
  },
  render: function () {
    var flight_html = Handlebars.compile(app.templates.flightView);
    var copy = flight_html( this.model.toJSON() );

    this.$el.html( copy );
  }
});