var app = app || {};

app.NavView = Backbone.Collection.extend({
  el: '#nav',
  initialize: function() {
    this.render();
    console.log('nav initialized');
  },
  render: function() {
    console.log('nav initialized');
    var nav_html = Handlebars.compile(app.templates.navView);
    this.$el.html(app.templates.navView);

    var copy = nav_html( this.model.toJSON() );
  }
});