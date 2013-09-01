define(["backbone", "collections/SongsCollection", "views/SongsView"], function(Backbone, songsCollection, SongsView){

	return Backbone.Router.extend({

		routes:{
			"":"loadSongs"
		},
		loadSongs: function(){
			console.log('load songs called');
			//inject collection 
			//var songsView = new SongsView({collection:SongsCollection});
			//SongsCollection.fetch();
			//create view instance and render it
			//call fetch on the collection.
		}
	});

});