define(['backbone', 'jquery', 'tpl!main'], function(backbone, $, main) {
	return backbone.Router.extend({
		routes: {
			"": "main"
		},

		main: function() {
			$('body').html(main());
		}
	});
});