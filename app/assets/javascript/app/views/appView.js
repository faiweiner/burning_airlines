var app = app || {};

app.AppView = Backbone.View.extend({

	el: '#main',

	events: {
		'click #nav-home': 						'index',
		'click #nav-planes': 					'planesSubview',
		'click #nav-flights': 				'flightsSubview',
		'click #nav-reservations':		'reservationsSubview',
		'click #nav-users': 					'usersSubview',
		'click #create-flight': 			'createFlight',
		'click #create-reservation': 	'createReservations'
	},

	initialize: function () {
		console.log('initialize.appView');
	},

	render: function () {
		console.log('render.appView');
		this.$el.css('background-color', 'orange');
		this.$el.html( app.templates.navigation );
		// this.$el.append('<div id="dump">Baller</div>');
	},

	index: function () {

	},

	planesSubview: function () {
		app.router.navigate("planes/", true);
		this.$el.append( app.templates.planeListTemplate );
		this.$el.append( app.templates.planeTemplate );
		debugger;
		this.closest('#dump').html( app.templates.planeTemplate );
	},

	flightsSubview: function () {
		alert('flight section!');
	},

	reservationsSubview: function () {
		alert('reservation section!');
	},

	usersSubview: function () {
		alert('user section!');
	},


	// createUser: function () {
	//   var userView = new app.UserView();
	//   userView.render();

	// },

	// createAirplane: function () {
	//   var airplaneView = new app.AirplaneView();
	//   airplaneView.render();

	// },

	// createFlight: function () {
	//   var flightView = new app.FlightView();
	//   flightView.render();

	// },

	// createReservations: function () {
	//   var reservationsView = new app.ReservationsView();
	//   reservationsView.render();

	// }

});