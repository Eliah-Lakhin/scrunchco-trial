define(['ext/handlebars', 'underscore'], function(handlebars, _) {
	handlebars.registerHelper('formatTime', function(timestamp) {
		var date = new Date(timestamp);

		return date.getDate()
			+ '.' + date.getMonth()
			+ '.' + date.getFullYear()
			+ ' ' + date.getHours()
			+ ':' + date.getMinutes()
			+ ':' + date.getSeconds();
	});

	handlebars.registerHelper('fullName', function(feedback) {
		return feedback.firstName + ' ' + feedback.secondName;
	});

	handlebars.registerHelper('text', function(message) {
		var prepared;

		prepared = _(message.split('\n'))
			.map(function(paragraph) { return _.escape(paragraph); })
			.join('<br />');

		return new Handlebars.SafeString(prepared);
	});

	return handlebars;
});