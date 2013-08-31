define(
	['backbone', 'tpl!feedback', 'app/collection/FeedbackCollection',
		'app/view/FeedbackListView'],
	function(backbone, feedbackTpl, FeedbackCollection, FeedbackListView) {
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
				var listView;

				this._collection = new FeedbackCollection();

				listView = new FeedbackListView({
					collection: this._collection
				});

				this._render();

				this.$el.append(listView.$el);
			},

			_render: function() {
				this.$el.html(feedbackTpl());

				this._$firstName = this.$('input#first-name');
				this._$secondName = this.$('input#second-name');
				this._$message = this.$('textarea#message');
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
			}
		});
	}
);