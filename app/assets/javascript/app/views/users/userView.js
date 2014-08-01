var app = app || {};

app.UserView = Backbone.View.extend({
  el: '#users',

  events: {
    'click button': 'createUser'
  },

  initialize: function () {
    this.render();
    console.log('from user view');
  },

  render: function () {
    var userTemplate = Handlebars.compile(app.templates.userTemplate);
    var copy = userTemplate( this.model.toJSON() );

    this.$el.html( copy );
  },

  createUser: function () {
    var newUser = new app.User( {name: $('#u-name').val(), password: $('#u-pword').val(), password_confirmation: $('#u-pconfirm').val() } );
    newUser.save();
    console.log('new user ready to get saved');
  }

});