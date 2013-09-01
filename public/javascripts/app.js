define(["jquery", "backbone", "routers/SongRouter"], function($, Backbone, SongRouter){
	return {

			initialize: function(){
				console.log(" App module  initialized ");
				var songRouter = new SongRouter();
				
					Backbone.history.start();
				

			}
	};
});