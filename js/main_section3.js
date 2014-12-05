//////////// CREATING VIEWS /////////////////////////

var SongView = Backbone.View.extend({

	tagName: "span",
	className: "song",
	id: "1234",
	attributes: {
		"data-genre": "Jazz"
	},



	render: function(){
		this.$el.html("Hello");

		return this;
	}

});

var songView = new SongView();
//songView.render();

$("#container").html(songView.render().$el);
//////////// CREATING VIEWS /////////////////////////


//////////// PASSING DATA TO VIEWS /////////////////////////

var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
	model: Song
});

var SongView = Backbone.View.extend({

	tagName: "li",

	render: function(){
		this.$el.html(this.model.get('title'));

		return this;
	}
});


var SongsView = Backbone.View.extend({

	render: function(){
		var self = this;
		//this.model refers to the collection passed to the view
		this.model.each(function(song){
			var songView = new SongView({ model: song });
			self.$el.append(songView.render().$el);
		});
	}

});




var songs = new Songs([

	new Song({title: "blue in green"}),
	new Song({title: "gravity"}),
	new Song({title: "papertrails"})

	]);

//var song = new Song({title: "Blue in green"});
//var songView = new SongView({ el: "#container", model: song});
//songView.render(); 	
var songsView = new SongsView({ el: "#songs", model: songs });
songsView.render();
//////////// PASSING DATA TO VIEWS /////////////////////////

//////////// HANDLING DOM EVENTS /////////////////////////


var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({

	events: {
		"click": "onClick",
		"click .bookmark": "onClickBookmark"
	},

	onClick: function(){
		console.log("Listen Clicked");
	},

	onClickBookmark: function(e){
		e.stopPropagation();
		console.log("Bookmark Clicked");
	},

	render: function(){
		this.$el.html(this.model.get('title') + " <button>Listen</button> <button class = 'bookmark'>Bookmark</button>");

		return this;
	}

});

var song = new Song({ title: 'Blue in Green'});

var songView = new SongView({ el: '#container', model: song});
songView.render();

//////////// HANDLING DOM EVENTS /////////////////////////

