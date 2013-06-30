var user = new User
var newUserForm = new UserForm({el: $("#user-form"), user: user})
newUserForm.render()

var session = new Session
var loginForm = new LoginForm({el: $("#login-form"), session: session})
loginForm.render()
