// main.js
// Initialize server, creates objects and connects to database

// Global variables
var modules = {core:{}, classes:{}, config:{}};
var controller;
var socket;
var database;
var tables;

// INITIALISATION
function init() {
	// Include all files
	includeLogic();
	
	// Create socket
	socket = new modules.classes.Socket();
	socket.init(modules.config.global.websocket.port);
	
	// Connection to database
	tables = modules.config.database.tables;
	database = new modules.classes.Database();
	database.init(database);	
	
	// Create controller
	controller = new modules.classes.Controller(new modules.classes.UserController(database, tables), new modules.classes.FileController(), new modules.classes.ProjectController());
			
	// Websocket
	socket.ws.on("connection", function(client) {
		// Initialization of user
		console.log("Connection occured");
		// Creation of the user & Add it to the user controller
		controller.userController.createClient(client, modules.classes.User);
		
		// Listenning for any message
		client.on("message", function(data) {
			var message = new modules.classes.Message(JSON.parse(data));
			console.log("TYPE=" + message.type + " " + "DATA=" + message.data);
			socket.handleMessage(message, controller);
			socket.sendMessage(client, message);
		});
		
		// var message = socket.parse(data);
		// socket.handle(message);
	});
	
	// Cannot work
	socket.ws.on("leave", function(client) {
		var user = controller.userController.getUser(client);
		userController.removeUser(user);
		console.log("Client removed");
	});
}

function includeLogic() {
	// Link core files
	modules.core.editor = require("./core/editor.js");
	modules.core.login = require("./core/login.js");
	modules.core.project = require("./core/project.js");
	
	// Link class files
	modules.classes.Controller = require("./class/Controller.js");
	modules.classes.UserController = require("./class/UserController.js");
	modules.classes.FileController = require("./class/FileController.js");
	modules.classes.ProjectController = require("./class/ProjectController.js");
	modules.classes.User = require("./class/User.js");
	modules.classes.File = require("./class/File.js");
	modules.classes.Project = require("./class/Project.js");
	modules.classes.Client = require("./class/Client.js");
	modules.classes.Database = require("./class/Database.js");
	modules.classes.Message = require("./class/Message.js");
	modules.classes.Socket = require("./class/Socket.js");
	
	// Link config
	modules.config.database = require("./resources/config/database.js");
	modules.config.global = require("./resources/config/global.js");
}

// Switch -> redirect core/xx

init();

