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

	parse: function(response) {
		this.user.set(response);

		delete response.points;
		return response;
	},

	toJSON: function() {
		var attributes = this.user.attributes;
		delete attributes.points;
		return this.user.attributes;
	},

	setCurrentAccount: function() {
		this.fetch({
			headers: {
				'Content-Type': 'application/json',
				'X-User-Token': session.get("token")
			}
		});
	},

	updateUser: function() {
		this.save({}, {
			headers: {
				'Content-Type': 'application/json',
				'X-User-Token': session.get("token")
			}
		});
	}
});
