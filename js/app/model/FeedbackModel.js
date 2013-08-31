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
			}
		});
	}
);