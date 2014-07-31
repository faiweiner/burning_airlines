var app = app || {};

app.PlaneView = Backbone.View.extend({
  el: '#main',
  initialize: function () {
    this.render();
  },
  render: function () {
    var plane_html = Handlebars.compile(app.templates.planeView);
    var copy = plane_html( this.model.toJSON() );

    var aisle_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(var r = 0; r <= this.model.get('rows'); r++) {
      for (var a = 0; a < this.model.get('aisles'); a++) {
        var aisle = aisle_letter.charAt(a);
      console.log(r, aisle);

      $('#seating-plan').text(aisle);
      }
    }

    this.$el.html( copy );


  }
});