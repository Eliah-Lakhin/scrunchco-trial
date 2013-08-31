define(
	['backbone', 'app/model/FeedbackModel'],
	function(backbone, FeedbackModel) {
		return backbone.Collection.extend({
			model: FeedbackModel
		});
	}
);