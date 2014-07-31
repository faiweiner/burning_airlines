var app = app || {};

app.PlaneListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'view'
  },
  initialize: function() {
    var list_html = Handlebars.compile(app.templates.planeListTemplate);
    // var copy = list_html( this.model.toJSON() );
    console.log("look up all planes");
  },

  render: function () {
    console.log("am i rendering?");
  },

  view: function () {
  
  }
});