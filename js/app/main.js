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
	[
		'ext/backbone',
		'ext/jquery'
	],
	function(
		Backbone,
		$
	) {
		// App start point
	}
);