define(
	['backbone', 'tpl!list'],
	function(backbone, listTpl) {
		return backbone.View.extend({
			collection: null,

			initialize: function() {
				this.collection.on('add', this._render, this);
			},

			_render: function() {
				this.$el.html(listTpl({
					feedback: this.collection.toJSON()
				}));
			}
		});
	}
);