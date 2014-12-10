var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
	model: Song
});	

var SongView = Backbone.View.extend({
	tagName: "li",

	render: function(){
		this.$el.html(this.model.get("title"));
		this.$el.attr("id", this.model.id);

		return this;
	}
});

var SongsView = Backbone.View.extend({

	tagName: "ul",

	initialize: function(){
		this.model.on("add", this.onSongAdded, this);
		this.model.on("remove", this.onSongRemoved, this);
	},

	onSongAdded: function(song){
		//console.log("Song added");
		var songView = new SongView({ model: song });

		this.$el.append(songView.render().$el);
	},

	onSongRemoved: function(song){
		//console.log("song removed");

		//this.$el.find("li" + song.id).remove();

		this.$("li#" + song.id).remove();
	},

	render: function(){
		var self = this;

		this.model.each(function(song){
			var songView = new SongView({model: song});
			self.$el.append(songView.render().$el);
		});
	}
});

var songs = new Songs([

	new Song({ id: 1, title: "Blue in Green"}),
	new Song({ id: 2, title: "This must be the place"}),
	new Song({ id: 3, title: "I am here"})
]);
 var songsView = new SongsView({ el: "#songs", model: songs });
 songsView.render();