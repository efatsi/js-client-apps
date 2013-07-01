var user    = new User;
var account = new Account({user: user});
var session = new Session;

var userView    = new UserView({el: $("#user-view"), user: user});
var newUserForm = new NewUserForm({el: $("#new-user-form"), user: user});
var loginForm   = new LoginForm({
	el: $("#login-form"),
	session:  session,
	userView: userView
});
var userForm    = new UserForm({
	el:       $("#current-user-form "),
	user:     user,
	account:  account,
	userView: userView
});
var navigation  = new Navigation({
	el:          $("#navigation"),
	newUserForm: newUserForm,
	loginForm:   loginForm,
	userForm:    userForm
});

navigation.render();
