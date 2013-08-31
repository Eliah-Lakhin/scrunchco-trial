define(
	['backbone', 'app/model/FeedbackModel'],
	function(backbone, FeedbackModel) {
		return backbone.Collection.extend({
			model: FeedbackModel,

			comparator: function(feedback) {
				return feedback.get('time');
			}
		});
	}
);