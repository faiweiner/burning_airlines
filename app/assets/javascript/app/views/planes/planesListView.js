var app = app || {};

app.PlanesListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'view'
  },
  initialize: function() {
    console.log("look up all planes");
  },

  render: function () {
    // var planes = new app.Planes();
    // planes.fetch();
    var list_html = Handlebars.compile(app.templates.planeListTemplate);
    var copy = list_html( this.model.toJSON() );
    this.$el.html( copy );
    console.log("am i rendering?");
  },

  view: function () {

  }
});