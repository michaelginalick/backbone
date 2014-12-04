//Create Backbone Model
var Vehicle = Backbone.Model.extend({
	// start method
	start: function(){
		console.log("Vehicle started");
	},
	//give attributes
	idAttribute: "registrationNumber",

	urlRoot: "/api/vehicle",

	validate: function(attrs){
		if (!attrs.registrationNumber)
			return "Must have registration number";
	}
});

//inheritense
var Car = Vehicle.extend({
	//override start method

	start: function(){
		//Vehicle.prototype.start.apply(this);
		console.log("Car with registration number:");
	}
});

var cars = new Vehicle({ registrationNumber: "XLI887"});

var car = new Car({ registrationNumber: "XLI887", color: "Blue" });





//car.unset("registrationNumber");
//car.isValid();
//car.validationError;

//car.set("registrationNumber", "XLI887");

//car.isValid();