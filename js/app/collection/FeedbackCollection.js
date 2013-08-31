define(
	['backbone', 'localStorage', 'app/model/FeedbackModel'],
	function(backbone, LocalStorage, FeedbackModel) {
		return backbone.Collection.extend({
			model: FeedbackModel,

			localStorage: new LocalStorage('Feedback'),

			comparator: function(feedback) {
				return feedback.get('time');
			}
		});
	}
);