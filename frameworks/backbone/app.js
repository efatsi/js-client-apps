var user    = new User;
var account = new Account({user: user});
var session = new Session;

var newUserForm = new NewUserForm({el: $("#new-user-form"), user: user});
var loginForm   = new LoginForm({el: $("#login-form"), session: session});
var userForm    = new UserForm({
	el:      $("#current-user-form "),
	user:    user,
	account: account
});
var navigation  = new Navigation({
	el:          $("#navigation"),
	newUserForm: newUserForm,
	loginForm:   loginForm,
	userForm:    userForm
});

navigation.render();
// newUserForm.render();
// loginForm.render();
