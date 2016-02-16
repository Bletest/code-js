// main.js
// Initialize server, creates objects and connects to database

// Global variables
var modules = {core:{}, classes:{}, config:{}};
var controller;

function init() {
	// Link core files
	
	// Link class files
	modules.classes.Controller = require("./class/Controller.js");
	modules.classes.User = require("./class/User.js");
	modules.classes.File = require("./class/File.js");
	modules.classes.Project = require("./class/Project.js");
	
	// Link config
	
	// Link
	
	// Create controller
	controller = new modules.classes.Controller(new modules.classes.User(), new modules.classes.File(), new modules.classes.Project());
	controller.test();
	// Create class object
	
	// Load config
	// resources/config/
	
	// Create socket
	
	// includeLogic();
	// Create global objects 
}

function includeLogic() {
	// Call core
	// Call all classes
}

// Switch -> redirect core/xx

init();

