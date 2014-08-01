var app = app || {};

app.User = Backbone.Model.extend({
  urlRoot: '/users',
  defaults: {
    admin: false,
    name: ''
  }
});