define(['backbone', 'tpl!main'], function(backbone, main) {
	return backbone.Router.extend({
		routes: {
			"": "main"
		},

		main: function() {
		}
	});
});