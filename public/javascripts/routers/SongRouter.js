define([
		"backbone", 
		"collections/SongsCollection",
		"views/SongsView"
		], 

	function(Backbone, songsCollection, SongsView){

	return Backbone.Router.extend({

		routes:{
			"":"loadSongs",
			"genre/:genre":"listByGenre"
		},
		loadSongs: function(){
			console.log('load songs called');
			//inject collection 
			if(!this.songsView){
				this.songsView = new SongsView({collection:songsCollection});
			}
			songsCollection.fetch({reset:true});
			
			
			//create view instance and render it
			//call fetch on the collection.
		},
		listByGenre: function(genre){
			console.log('genre '+ genre);
		}
	});

});