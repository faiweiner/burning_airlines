var app = app || {};

app.PlanePortal = Backbone.View.extend({
	el: '#planes',

	events: {
		'click button': 'createPlane'
	},

	initialize: function () {
		this.render();
		console.log('from plane PORTAL');
	},

	render: function () {
		this.$el.html('<h1>IM A PLANE PORTAL</h1>');
		this.$el.append( app.templates.createPlane );
	}
});



		// var planeListView = new app.PlaneListView({collection: planes});
		// planeListView.render();