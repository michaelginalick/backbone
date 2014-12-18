//MODEL
var Vehicle = Backbone.Model.extend();
//COLLECTION
var Vehicles = Backbone.Collection.extend({
	model: Vehicle
});



//MODEL VIEW
var VehicleView = Backbone.View.extend({

	initialize: function(options){
								//this.onModelChange
		this.model.on("change", this.render, this);
		this.bus = options.bus;
	},

	className: "vehicle",
	tagName: "li",

	render: function(){

		var template = _.template($("#vehicleTemplate").html());
		var html = template(this.model.toJSON());
		this.$el.html(html);

		return this;
	}
});


//COLLECTION VIEW
var VehiclesView = Backbone.View.extend({

	tagName: "ul",

	initialize: function(options){
		this.bus = options.bus;
		this.model.on("add", this.onAddNewCar, this);
		this.model.on("remove", this.removeCar, this);
	},

	events: {
		"click #button": "removeCar",
	},

	onAddNewCar: function(newCar){
		var view = new VehicleView({ model: newCar });
		this.$el.append(view.render().$el);
	},

	onClickAdd: function(){
		this.bus.trigger("onClickAdd", this.model);
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
			var carView = new VehicleView({model: vehicle});
			self.$el.append(carView.render().$el);
		});
	}
});


var NewVehicleView = Backbone.View.extend({

	initialize: function(options){
		this.bus = options.bus;
		
	},

	events: {
		"click #add": "onClickAdd"
	},

	onClickAdd: function(){
		var newCar = new Vehicle({ registrationNumber: this.$("#newCarItem").val() });
		var value = this.$("#newCarItem").val();

		 if (value === ""){
		 	alert("Cannot be null");
		 }else{
			this.model.add(newCar);
		 	this.$("#newCarItem").val("");
		 }
	},

	render: function(){
		this.$el.append("<input type='text' id='newCarItem'</input>");
		this.$el.append("<button id = 'add'>Add</button>");
		this.$el.html();

		return this;
	}

});


var bus = _.extend({}, Backbone.Events);


var cars = new Vehicles([

	new Vehicle({ id: 1, registrationNumber: "XLI887", colour: "Blue" }),
	new Vehicle({ id: 2, registrationNumber: "ZNP123", colour: "Blue" }),
	new Vehicle({ id: 3, registrationNumber: "XUV456", colour: "Gray" })

]);



var carsView = new VehiclesView({ el: "#carsList", model: cars, bus: bus});
var newView = new NewVehicleView({el: "#newCarView", model: cars, bus: bus});
carsView.render();
newView.render();