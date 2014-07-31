var app = app || {};

app.PlaneView = Backbone.View.extend({
	el: '#planes',

	events: {
		'click button': 'createPlane'
	},

	initialize: function () {
		this.render();
		console.log('from plane view');
	},

	render: function () {
		var planeTemplate = Handlebars.compile(app.templates.planeTemplate);
		var copy = planeTemplate( this.model.toJSON() );

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
	  var newPlane = new app.Plane( {name: $('#name').val(), row: $('#row').val(), column: $('#column').val()} );
	  newPlane.save();
	  console.log('new plane ready to get saved');
	}

});