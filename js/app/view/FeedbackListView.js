define(
	['backbone', 'tpl!feedback-list'],
	function(backbone, feedbackListTpl) {
		return backbone.View.extend({
			collection: null,

			initialize: function() {
				this.collection.on('add', this._render, this);
			},

			_render: function() {
				this.$el.html(feedbackListTpl({
					feedback: this.collection.toJSON()
				}));
			}
		});
	}
);