var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  tagName: 'h2',
  events: {
    'click': 'h2'
  },
  initialize: function () {
    console.log('AppView Initialized');
  },
  render: function () {
    this.$el.html(app.templates.appView);
    this.collection.each(function (p) {
      var view = new app.PlaneListView({model: p});
      $('#planes').append( view.render() );
    });
  }
});