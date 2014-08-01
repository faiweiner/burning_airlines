var app = app || {};

app.PlaneListView = Backbone.View.extend({
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
    // debugger;
    var copy = list_html( this.collection.toJSON() );
    // this.$el.html( copy );
    console.log("am i rendering?");
  },

  view: function () {

  }
});