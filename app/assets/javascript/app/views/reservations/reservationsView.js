// var app = app || {};

// app.ReservationsView = Backbone.View.extend({
//   tagName: '#main',
//   events: {
//     'click': 'view'
//   },

//   initialize: function () {
//     console.log("check all reservations");
//   },

//   render: function () {
//     var list_html = Handlebars.compile(app.templates.allReservationsTemplate);
//     var copy = list_html( this.collection.toJSON() );
//     this.$el.html( copy );
//     console.log("reservations rendered?");
//   },

//   view: function() {
//     app.router.navigate('reservations/' + this.model.get('id'), true)
//   }
// });