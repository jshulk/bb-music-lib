require.config({
	baseUrl:"javascripts",
	shim:{
		underscore:{
			exports:"_"
		},
		backbone:{
			deps:['jquery','underscore'],
			exports:'Backbone'
		},
		'bootstrap':{
			deps:['jquery'],
			exports:'bootstrap'
		}
	},

	paths:{
		'jquery':'libs/jquery.min',
		'underscore':'libs/underscore-min',
		'backbone':'libs/backbone-min',
		'bootstrap':'libs/bootstrap.min',
		'app':'app',
		'tpl':'libs/tpl'
	}

});

require(["app"], function(App){
	App.initialize();
});