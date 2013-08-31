define(['backbone', 'tpl!feedback'], function(backbone, feedbackTpl) {
	return backbone.View.extend({
		events: {
			'submit form#feedback-form': '_submitFeedback'
		},

		_$form: null,
		_$firstName: null,
		_$secondName: null,
		_$message: null,

		initialize: function() {
			this._render();
		},

		_render: function() {
			this.$el.html(feedbackTpl());

			this._$form = this.$('form#feedback-form');
			this._$firstName = this.$('input#firstName');
			this._$secondName = this.$('input#secondName');
			this._$message = this.$('input#message');
		},

		_submitFeedback: function() {


			return false;
		}
	});
});