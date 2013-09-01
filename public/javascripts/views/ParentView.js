define([
		"backbone"
	   ], 
	function(Backbone){

	return Backbone.View.extend({
		
		initialize: function(){
			this.childViews = [];
		},

		close: function(){
			Backbone.View.prototype.remove.apply(this, arguments);
			this.removeChildViews();
		},
		removeChildViews: function(){
			_.each(this.childViews, function(view){
				view.remove();
			});

			this.childViews = [];
		},
		appendAllChildViews: function(){
			_.each(this.childViews, function(view){
				this.$el.append(view.render().el);
			});
		}

	});
});