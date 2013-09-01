define([
		"backbone", 
		"models/Song"
		], 

	function(Backbone, Song){

	var SongsCollection =  Backbone.Collection.extend({
		url:"/songs",
		model:Song
	});

	return new SongsCollection();
});