define(["backbone", "views/SongView", "views/ParentView"], function(Backbone, SongView, ParentView){

	return ParentView.extend({
		el:"#songs-list",
		initialize: function(){
			this.listenTo(this.collection, "reset", this.render);
			this.listenTo(this.collection, "add", this.addOne);
		},
		render: function(){
			this.addAll();
			this.appendAllChildViews();
			return this;
		},
		addAll: function(){
			_.each(this.collection, function(song){
				var view = new SongView({model:song});
				this.childViews.push(view);
			}, this);
			
		}
		addOne: function(song){
			var view = new SongView({model:song});
			this.$el.append(view.render().el);
		}
	});
});