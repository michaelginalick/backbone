var Vehicle = Backbone.Model.extend();

var Vehicles = Backbone.Collection.extend({
	model: Vehicle
});

var vehicleView = Backbone.View.extend({
	tagName: "li",
	className: "vehicle",

	render: function(){

		
		var template = _.template($("#vehicleTemplate").html());
		var html = template(this.model.toJSON());
		this.$el.html(html);

		// this.$el.attr("id", this.model.id);
		//this.$el.html(this.model.get("registrationNumber"));
		//this.$el.attr("id", this.model.id);

		//return this;

		return this;
	}


});

var VehiclesView = Backbone.View.extend({

	tagName: "ul",

	initialize: function(){
		this.model.on("remove", this.onVehicleRemove, this);

	},

	onVehicleRemove: function(){
		//this.$("li#" + car.id).remove();
		console.log("I am here");
	}, 

	render: function(){

		var self = this;

		this.model.each(function(vehicle){
			var carView = new vehicleView({model: vehicle});
			self.$el.append(carView.render().$el);
		});
	}
});

var cars = new Vehicles([

	new Vehicle({ id: 1, registrationNumber: "XLI887", colour: "Blue" }),
	new Vehicle({ id: 2, registrationNumber: "ZNP123", colour: "Blue" }),
	new Vehicle({ id: 3, registrationNumber: "XUV456", colour: "Gray" })

]);

var carsView = new VehiclesView({ el: "#songs", model: cars});
carsView.render();