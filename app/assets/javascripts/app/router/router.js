var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'planes',
    'planes/:id': 'getPlane'
  },
  initialize: function () {
    console.log("router initialized");
    app.planes = new app.Planes();
    app.planes.fetch().done(function (){
      Backbone.history.start();
    });
  },
  index: function () {
    console.log('you reached index');
    var appView = new app.AppView({collection: app.planes});
    appView.render();
  },
  getPost: function (id) {
    var appView = new app.AppView({collection: app.planes});
    appView.render();
    var plane = app.planes.get(id);
    new app.PostView({model: plane});
  }
});