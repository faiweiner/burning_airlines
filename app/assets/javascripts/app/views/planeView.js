var app = app || {};

app.PlaneView = Backbone.View.extend({
  el: '#main',
  initialize: function () {
    this.render();
  },
  render: function () {
    var plane_html = Handlebars.compile(app.templates.planeView);
    var copy = plane_html( this.model.toJSON() );

    this.$el.html( copy );
  }
});