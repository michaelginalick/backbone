var Vehicle = Backbone.Model.extend();

var Vehicles = Backbone.Collection.extend({
	model: Vehicle
});

var vehicleView = Backbone.View.extend({

	initialize: function(){
								//this.onModelChange
		this.model.on("change", this.render, this);
	},

	className: "vehicle",
	tagName: "li",



	render: function(){

		var template = _.template($("#vehicleTemplate").html());
		var html = template(this.model.toJSON());
		this.$el.html(html);

		//this.$el.attr("id", this.model.id);
		return this;
	}


});

var VehiclesView = Backbone.View.extend({

	tagName: "ul",

	initialize: function(){
		this.model.on("remove", this.removeCar, this);

	},



	events: {
		"click #button": "removeCar"
	},

	removeCar: function(e){
		//this.$("li#" + car.id).remove();
		//this.$el.find("li#" + car.id).remove();
		var liElement = this.$(e.currentTarget).parent('li');
		liElement.remove();
		
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

var carsView = new VehiclesView({ el: "#carsList", model: cars});
carsView.render();