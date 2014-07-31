var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 										'index',					// homepage
    'planes': 							'planes',
    'planes(/:id)': 				'planes',
    'planes/:query': 				'searchPlane'
  },

  index: function () {
    var appView = new app.AppView();
    appView.render();
  },

  planes: function () {
        // this.$el.append( app.planeView );  
    // this.$el.append( app.templates.createPlane );
    var planeListView = new app.PlaneListView({collection: planes});
  	console.log("planes route");
    debugger;
    planeListView.render();
  },

  searchPlane: function () {
  	console.log('search plane');
  }
});
