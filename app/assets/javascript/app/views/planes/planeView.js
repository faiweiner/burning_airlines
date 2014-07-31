var app = app || {};

app.PlaneView = Backbone.View.extend({
	el: '#planes',

	events: {
		'click button': 'createAirplane'
	},

	initialize: function () {
		this.render();
	},

	render: function () {
		var planeView = Handlebars.compile(app.templates.planeView);
		var copy = planeView( this.model.toJSON() );

		var aisle_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		for(var r = 0; r <= this.model.get('rows'); r++) {
      for (var a = 0; a < this.model.get('aisles'); a++) {
        var aisle = aisle_letter.charAt(a);
      console.log(r, aisle);
    	$('#seating-plan').text(aisle);
    	}
    }

		this.$el.html( copy );
	},

	createPlane: function () {
	  // var newPlane = new app.Plane( {name: $('#name').val(), row: $('#row').val(), column: $('#column').val()} );
	  // newPlane.save();
	  console.log('new plane ready to get saved');
	}

});