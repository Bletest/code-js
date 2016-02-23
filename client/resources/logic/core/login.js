
var Login = function(){
	this.init = function() {
		$("#login-button").on("click", this.login);
		$("#login-sign-up").on("click", this.toggleSignUp);
		$("#repeat-password-area").toggle();
		console.log("Login intialized");
	}
	
	this.login = function() {
		changePage("project-manager");
	}
	
	this.toggleSignUp = function() {
		$("#repeat-password-area").toggle();
		if($("#repeat-password-area").is(':visible')) {
			$("#login-button").val("Sign up");
			$("#login-sign-up").text("Log in");
		}
		else {
			$("#login-button").val("Log in");
			$("#login-sign-up").text("Sign up");
		}
	}
};
