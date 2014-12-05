var Song = Backbone.Model.extend({});

var Songs = Backbone.Collection.extend({
	model: Song
});

var songs = new Songs([
	new Song({title: "Song 1"}),
	new Song({title: "Song 2"}),
	new Song({title: "Song 3"})
	]);

songs.add(new Song({title: "Song 4"}));

var firstSong     = songs.at(0);
var SongsWithIdC1 = songs.get("c1");
//remove expects a model to be passed to it - songs.remove(songs.at(0));
songs.remove(firstSong); 


var songs1 = new Songs();

songs1.add(new Song({title: "new", genre: "Jazz", downloads: 110}), {at: 0});
songs1.push(new Song({title: "Songss", genre: "Jazz", downloads: 90}));

//reuturns an array
var jazzSongs = songs1.where({ genre: "Jazz" });

//returns the first object
var firstJazzSong = songs1.findWhere({genre: "Jazz"});

console.log("Jazz Songs", jazzSongs);
console.log("First Jazz song", firstJazzSong);

var filteredSongs = songs1.where({ genre: "Jazz", title: "new"});
console.log("filteredSongs", filteredSongs);

var topDownloads = songs1.filter(function(song){
	return song.get("downloads") > 100;
});

console.log("top downloads", topDownloads)


songs1.each(function(song){
	console.log(song);
});









