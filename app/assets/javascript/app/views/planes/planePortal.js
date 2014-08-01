var app = app || {};

app.PlanePortal = Backbone.View.extend({
	el: '#planes',
	events: {
		'click span': 'getPlane'
	},

	initialize: function () {
		// this.render();
		console.log('from plane PORTAL');
	},

	render: function () {
		this.$el.html('<h1>IM A PLANE PORTAL</h1>');
		this.$el.append( app.templates.createPlane );
    var planes = new app.Planes();
    var view = this;
    planes.fetch().done(function () {
    	planes.each( function (plane) { 
      	var planesListView = new app.PlanesListView({model: plane});
	      planesListView.render();
		    view.$el.append( planesListView.el );		
    	});
      console.log("planes route");
    });
	},

	getPlane: function (e) {
		var inside = $(e.target).html();
		console.log('clicked a span!');
		alert (inside);
		var plane = new app.Plane({name: inside});
		debugger;
		app.router.navigate("planes/" + inside, true);
	}
});



		// var planeListView = new app.PlaneListView({collection: planes});
		// planeListView.render();