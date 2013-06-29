var LoginForm = Backbone.View.extend({
	events: {
		'submit form': 'login'
	},

	initialize: function(options) {
		this.session = options.session
	},

	render: function() {
		var html = '<form><h1>Log In</h1><label>Email address</label><input name="email" id="email" type="email"><label>Password</label><input name="password" id="password" type="password"><button type="submit">Submit</button></form>'
		$(this.el).html(html);
	},

	login: function(e) {
		e.preventDefault();

		this.session.set({
			email: $("#email").val(),
			password: $("#password").val()
		})

		this.session.save({}, {
			success: function() {
				$("#login-form").html("Logged In")
			},
			error: function() {
				alert("Bad credentials")
			}
		});
	}
});
