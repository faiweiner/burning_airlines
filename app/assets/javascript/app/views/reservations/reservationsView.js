var app = app || {};

app.ReservationsView = Backbone.View.extend({
  el: '#planes',
  events: {
    'click': 'view'
  },

  initialize: function () {
    console.log("check all reservations");
    this.render();
  },

  render: function () {
    var list_html = Handlebars.compile(app.templates.allReservationsTemplate);
    var view = this;
    this.collection.each(function (res){
      var copy = list_html( res.toJSON() );
      view.$el.html( copy );
    });
      console.log("reservations rendered?");
  },

  view: function() {
    app.router.navigate('reservations/' + this.model.get('id'), true)
  }
});