var app = app || {};

app.PlaneView = Backbone.View.extend({
  el: '#main',
  initialize: function () {
    this.render();
  },
  render: function () {
    var plane_html = Handlebars.compile(app.templates.planeView);
    var copy = plane_html( this.model.toJSON() );
    for(var r = 0; r <= this.model.get('rows'); r++) {
      for (var a = 0; a <= this.model.get('aisles'); a++) {
      console.log(r, a);
      $('#seating-plan').append('<div/>');
      }
    }

    this.$el.html( copy );
  }
});