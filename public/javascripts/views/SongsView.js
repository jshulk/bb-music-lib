define([
		"backbone",		
		"views/SongView"
		],

	function(Backbone, SongView){

	return Backbone.View.extend({
		el:"#songs-list",
		initialize: function(){
			this.childViews = [];
			this.listenTo(this.collection, "reset", this.render);
			this.listenTo(this.collection, "add", this.addOne);
		},
		render: function(){
			this.addAll();
			return this;
		},
		addAll: function(){
			this.collection.each(this.addOne, this);
		},
		addOne: function(song){
			var view = new SongView({model:song});
			this.$el.append(view.render().el);
			this.childViews.push(view);
		},
		removeAllChildViews: function(){
			if(this.childViews.length){
				_.each(this.childViews, function(view){
					view.remove();
				});
				this.childViews = [];
			}
			
		},
		close: function(){
			Backbone.View.prototype.remove.call(this, arguments);
			this.removeAllChildViews();
		}
	});
});