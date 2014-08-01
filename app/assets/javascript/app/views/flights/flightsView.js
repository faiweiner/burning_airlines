var app = app || {};

app.FlightsView = Backbone.View.extend({
  el: '#planes',
  events: {
    'click li': 'view'
  },
  initialize: function() {
    console.log("look up all flights");
    this.render();
  },

  render: function () {
    var list_html = Handlebars.compile(app.templates.flightsTemplate);
    // debugger;
    var view = this;
    this.collection.each(function(flights) {
      var copy = list_html(flights.toJSON() )
      view.$el.append( copy );
      return copy;
    })

    console.log("am i rendering?");
  },

  view: function (flights) {
    console.log('you\'ve clicked ');
    app.router.navigate('flights/' + flights.model.get('id'), true);
  }
});