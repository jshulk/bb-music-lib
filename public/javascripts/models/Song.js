define(["backbone"], function(Backbone){
	
	return Backbone.Model.extend({
		
		defaults:{
			"song_title":"new song",
			"album_cover":"",
			"album_id":"",
			"genre":"",
			"album_name":""
		}
	});
});