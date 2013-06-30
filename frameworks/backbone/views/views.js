var Navigation = Backbone.View.extend({
	events: {
		'click #new-user':  'newUser',
		'click #login':     'login',
		'click #edit-user': 'editUser'
	},

	initialize: function(options) {
		this.newUserForm = options.newUserForm
		this.loginForm   = options.loginForm,
		this.userForm    = options.userForm
	},

	newUser: function(e) {
		console.log("HII")
		e.preventDefault();
		this.newUserForm.render();
	},

	login: function(e) {
		e.preventDefault();
		this.loginForm.render();
	},

	editUser: function(e) {
		e.preventDefault();
		this.userForm.render();
	}
})

var NewUserForm = Backbone.View.extend({
	events: {
		'submit form': 'create'
	},

	initialize: function(options) {
		this.user = options.user
	},

	render: function() {
		var html = '<form><h1>Create User</h1><label>Email address</label><input name="email" id="email" type="email"><label>Username</label><input name="username" id="username"><label>Password</label><input name="password" id="password" type="password"><label>Password Confirmation</label><input name="password_confirmation" id="password-confirmation" type="password"><button type="submit">Submit</button></form>'
		$(this.el).html(html);
	},

	create: function(e) {
		e.preventDefault();

		this.user.set({
			email: $("#email").val(),
			username: $("#username").val(),
			password: $("#password").val(),
			password_confirmation: $("#password-confirmation").val()
		})

		this.user.save({}, {
			success: function() {
				$("#new-user-form").html("User Created");
			},
			error: function(response, body) {
				console.log(body.responseText);
				alert("Baaaad");
			}
		});
	}
});

var LoginForm = Backbone.View.extend({
	events: {
		'submit form': 'login'
	},

	initialize: function(options) {
		this.session = options.session;
	},

	render: function() {
		var html = '<form><h1>Log In</h1><label>Email address</label><input name="email" id="login-email" type="email"><label>Password</label><input name="password" id="login-password" type="password"><button type="submit">Submit</button></form>'
		$(this.el).html(html);
	},

	login: function(e) {
		e.preventDefault();

		this.session.set({
			email: $("#login-email").val(),
			password: $("#login-password").val()
		})

		this.session.save({}, {
			success: function() {
				$("#login-form").html("Logged In");
				account.setCurrentAccount();
			},
			error: function(response, body) {
				console.log(body.responseText);
				alert("Baaaad");
			}
		});
	}
});

var UserForm = Backbone.View.extend({
	events: {
		'submit form': 'update'
	},

	initialize: function(options) {
		this.user    = options.user;
		this.account = options.account;
	},

	render: function() {
		var html = '<form><h1>Update User</h1><label>Email address</label><input name="email" id="email" type="email" value="' + this.user.attributes.email + '"><label>Username</label><input name="username" id="username" value="' + this.user.attributes.username + '"><button type="submit">Submit</button></form>'
		$(this.el).html(html);
	},

	update: function(e) {
		e.preventDefault();

		this.user.set({
			email: $("#email").val(),
			username: $("#username").val(),
			password: $("#password").val(),
			password_confirmation: $("#password-confirmation").val()
		})

		this.account.updateUser();
	}
});
