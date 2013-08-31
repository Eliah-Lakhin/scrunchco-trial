requirejs.config({
	baseUrl: '/js/',

	paths: {
		'jquery': 'ext/jquery',
		'underscore': 'ext/underscore',
		'backbone': 'ext/backbone',
		'tpl': 'misc/tpl'
	},

	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},

		'underscore': {
			exports: '_'
		},

		'jquery': {
			exports: 'jQuery'
		},

		'ext/handlebars': {
			exports: 'Handlebars'
		}
	}
});

require(
	['jquery', 'backbone', 'app/Router'],
	function($, backbone, Router) {
		// App start point

		$(function() {
			var router;

			router = new Router();

			backbone.history.start();
		});
	}
);