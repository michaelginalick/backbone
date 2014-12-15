var seconds = new Date();

var person = {
	name: "Mosh",

	walk: function(){
		this.trigger("walking", {
			speed: 01,
			startTime: "08:00",
			currentTime: seconds
		});
	}

};

_.extend(person, Backbone.Events);
//person.once - 
person.on("walking", function(e){
	console.log("Person is walking");
	console.log("Event Args:", e)
});

person.walk();
person.off("walking");
person.walk();