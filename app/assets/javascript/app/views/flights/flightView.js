var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#planes',
  tagName: 'div',

  events: {
    'click button': 'createFlight',
    'click h1': 'getPlaneInfo'
  },

  initialize: function () {
    this.render();
    console.log('from flight view');
    // getPlaneInfo();
  },

  render: function () {
    var flightTemplate = Handlebars.compile(app.templates.flightTemplate);
    var copy = flightTemplate( this.model.toJSON() );

    this.$el.html( copy );
  },

  getPlaneInfo: function () {
    // var newFlight = new app.Flight( {name: $('#name').val(), origin: $('#origin').val(), destination: $('#destination').val(), date: $('#date')} );
    // newPlane.save();
    // console.log('new plane ready to get saved');

    var plane = app.planes.where({id: this.model.attributes.plane_id})[0];
    // debugger;
    var numSeats = plane.get('rows') * plane.get('aisles');
    // console.log(numSeats);
    var rows = plane.get('rows');
    var aisles = plane.get('aisles');
    var aisle_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(var r = 0; r <= rows; r++) {
      for (var a = 0; a < aisles; a++) {
        var aisle = aisle_letter.charAt(a);
        console.log(aisle, r);
        var seatTemplate = Handlebars.compile(app.templates.seatTemplate);
        this.$el.append(seatTemplate({r: r}));

      }
    }

    console.log("rows " + plane.get('rows'));
    console.log("aisles " + plane.get('aisles'));
    // return seats;
  }

});