var app = app || {};

app.FlightListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'view'
  },
  initialize: function() {

  },
  render: function () {
    // THIS MAKES NO FRIGGIN SENSE!!!!!! WTF
    var list_html = Handlebars.compile(app.templates.flightListView)
    var copy = list_html( this.model.toJSON() );

    this.$el.html( copy );
    return this.el;
  },
  view: function () {
    app.router.navigate('flights/' + this.model.get('id'), true);
  }
});