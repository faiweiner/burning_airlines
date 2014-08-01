var app = app || {};

app.FlightsView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'view'
  },
  initialize: function() {
    console.log("look up all planes");
  },

  render: function () {
    var list_html = Handlebars.compile(app.templates.flightsTemplate);
    // debugger;
    var copy = list_html( this.collection.toJSON() );
    this.$el.html( copy );
    console.log("am i rendering?");
  },

  view: function () {
    app.router.navigate('flights/' + this.model.get('id'), true);
  }
});