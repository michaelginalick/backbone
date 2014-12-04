var Vehicle = Backbone.Model.extend({

});

var Vehicles = Backbone.Collection.extend({

	model: Vehicle
});


var cars = new Vehicles([

	new Vehicle({ registrationNumber: "XLI887", colour: "Blue" }),
	new Vehicle({registrationNumber: "ZNP123", colour: "Blue" }),
	new Vehicle({ registrationNumber: "XUV456", colour: "Gray" })

	]);

var blueCars = cars.where({colour: "Blue"});
console.log(JSON.stringify(blueCars));

var specificRegistration = cars.findWhere({registrationNumber: "XLI887"});
console.log(JSON.stringify(specificRegistration));

cars.remove(specificRegistration);

cars.each(function(car){
	console.log(JSON.stringify(car));
});
