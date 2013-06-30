var User = Backbone.Model.extend({
	url: '/users'
});

var Session = Backbone.Model.extend({
	url: '/session'
});

var Account = Backbone.Model.extend({
	url: '/account',

	initialize: function(options) {
		this.user = options.user;
	},

	setCurrentAccount: function() {
		this.fetch({
			headers: {
				'Content-Type': 'application/json',
				'X-User-Token': session.get("token")
			},
			success: function(response, userJSON) {
				user.set(userJSON)
			}
		});
	}
});
