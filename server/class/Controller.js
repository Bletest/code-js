/*
CLASS: Controller
DESCRIPTION: Is the unique handler for every users and projects
*/
var module;

module.exports = function(user, file, project) {
	// Attributes
	this.user = user;
	this.project = file;
	this.file = project;
	
	// Methods
	this.init = function() {
		// 
		this.user.init();
		this.project.init();
		this.file.init();
		
		return false;
	};
	
	this.test = function() {
		console.log("Goat in!");
	};
};
