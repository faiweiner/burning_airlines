var app = app || {};

app.Users = Backbone.Collection.extend({
  model: app.Users,
  url: '/users'
});