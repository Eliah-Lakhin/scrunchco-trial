define(
	['backbone'],
	function(backbone) {
		return backbone.Model.extend({
			defaults: {
				time: 0,
				firstName: '',
				secondName: '',
				message: ''
			},

			initialize: function(payload) {
				if (!payload.time) {
					this.set('time', new Date().getTime());
				}
			},

			validate: function(attributes) {
				if (!attributes.firstName) {
					return 'First name is required';
				}

				if (!attributes.secondName) {
					return 'Second name is required';
				}

				if (!attributes.message) {
					return 'Message is required';
				}
			}
		});
	}
);