define(["backbone", "tpl!templates/SongItem.tmpl"], function(Backbone, SongTemplate){
	return Backbone.View.extend({
		tagName: "li",
		render: function(){
			this.$el.html(SongTemplate( this.model.toJSON() ));
			return this;
		}
	})
});