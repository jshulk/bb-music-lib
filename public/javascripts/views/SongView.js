define([
		"backbone",
		"tpl!templates/songitem.tmpl"
	   ], 
	function(Backbone, songTemplate){

		return Backbone.View.extend({
			tagName: "li",
			render: function(){
				this.$el.html(songTemplate( this.model.toJSON() ));
				return this;
			}
		});
});