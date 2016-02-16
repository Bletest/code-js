// main.js
// Initialize server, creates objects and connects to database

// Global variables
var modules = {core:{}, classes:{}, config:{}};
var controller;
var socket;

// INITIALISATION

function init() {
	// Include all files
	includeLogic();
	
	// Create controller
	controller = new modules.classes.Controller(new modules.classes.User(), new modules.classes.File(), new modules.classes.Project());
	controller.test();
	
	// Create socket
	socket = new modules.classes.Socket();
	socket.init();
	
	// Websocket
	socket.ws.on("connection", function() {
		console.log("Connection occured");
	});
}

function includeLogic() {
	// Link core files
	modules.core.Editor = require("./core/editor.js");
	modules.core.Login = require("./core/login.js");
	modules.core.Project = require("./core/project.js");
	
	// Link class files
	modules.classes.Controller = require("./class/Controller.js");
	modules.classes.User = require("./class/User.js");
	modules.classes.File = require("./class/File.js");
	modules.classes.Project = require("./class/Project.js");
	modules.classes.Client = require("./class/Client.js");
	modules.classes.Database = require("./class/Database.js");
	modules.classes.Message = require("./class/Message.js");
	modules.classes.Socket = require("./class/Socket.js");
	
	// Link config
	modules.config.Database = require("./resources/config/database.js");
	modules.config.Global = require("./resources/config/global.js");
}

// Switch -> redirect core/xx

init();

