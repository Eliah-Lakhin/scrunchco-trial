define(
	['backbone', 'jquery', 'app/view/FeedbackView'],
	function(backbone, $, FeedbackView) {
		return backbone.Router.extend({
			routes: {
				"": "main"
			},

			_$body: null,

			initialize: function() {
				this._$body = $('body');
			},

			main: function() {
				var view;

				view = new FeedbackView();

				this._$body.empty();
				this._$body.append(view.$el);
			}
		});
	}
);