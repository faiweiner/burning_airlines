var app = app || {};

app.Post = Backbone.Model.extend({
  urlRoot: '/planes',
  defaults: {
    title: 'New Post about Backbone',
    content: 'New Post about Backbone, content goes here'
  }
});