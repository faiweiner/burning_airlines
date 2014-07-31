var app = app || {};

app.NavView = Backbone.Collection.extend({
  el: '#nav',
  initialize: function() {
    this.render();
  },
  render: function() {
    var nav_html = Handlebars.compile(app.templates.navView);
    var copy = nav_html( this.model.toJSON() );
  }
});