requirejs.config({
	baseUrl: '/js/',

	shim: {
		'ext/backbone': {
			deps: ['ext/underscore', 'ext/jquery'],
			exports: 'Backbone'
		},

		'ext/underscore': {
			exports: '_'
		},

		'ext/jquery': {
			exports: 'jQuery'
		}
	}
});

require(
	['ext/jquery', 'ext/backbone', 'app/Router'],
	function($, backbone, Router) {
		// App start point

		$(function() {
			var router;

			router = new Router();

			backbone.history.start();
		});
	}
);