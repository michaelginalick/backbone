
var Song = Backbone.Model.extend({
	defaults: {
		listeners: 0
	}
});

var SongView = Backbone.View.extend({
	initialize: function(){
								//this.onModelChange
		this.model.on("change", this.render, this);
	},

	onModelChange: function(){
		this.$el.addClass("somClass");
	},

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
		this.$el.html(this.model.get('title') + " - Listeners: " + this.model.get('listeners'));

		return this;
	}

});

var song = new Song({ title: 'Blue in Green'});

var songView = new SongView({ el: '#container', model: song});
songView.render();
