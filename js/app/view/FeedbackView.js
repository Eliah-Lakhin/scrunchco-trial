define(
	['backbone', 'tpl!feedback', 'app/collection/FeedbackCollection'],
	function(backbone, feedbackTpl, FeedbackCollection) {
		return backbone.View.extend({
			events: {
				'submit form#feedback-form': '_submitFeedback'
			},

			_collection: null,

			_$form: null,
			_$firstName: null,
			_$secondName: null,
			_$message: null,

			initialize: function() {
				this._collection = new FeedbackCollection();

				this._collection.on('add', this._add, this);

				this._render();
			},

			_render: function() {
				this.$el.html(feedbackTpl());

				this._$firstName = this.$('input#firstName');
				this._$secondName = this.$('input#secondName');
				this._$message = this.$('input#message');
			},

			_submitFeedback: function() {
				var model;

				model = {
					firstName: this._$firstName.val(),
					secondName: this._$secondName.val(),
					message: this._$message.val()
				};

				this._collection.add(model);

				return false;
			},

			_add: function(model) {
				console.log(model.get('time'))
			}
		});
	}
);