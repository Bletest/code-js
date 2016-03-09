// main.js
// Initialize server, creates objects and connects to database

// Global variables
global.modules = {core:{}, classes:{}, config:{}};
global.controller;
global.socket;
global.database;
global.tables;

// INITIALISATION
function init() {
    console.log("----------------------------------------------");
    console.log("CodeJS (Server) by 4HIN (2015-2016) / CIFOM-ET");
    console.log("----------------------------------------------");
    console.log("");
    
	// Include all files
	includeLogic();
    
    log("Creating websocket...", "debug");
    
	// Create socket
	socket = new modules.classes.Socket();
	socket.init(modules.config.global.websocket.port);
	
    log("Done.", "debug");
    log("Connecting to the database", "debug");

	// Connection to database
	database = new modules.classes.Database(modules.config.database.path);
	database.init();	
    tables = modules.config.database.tables;

    log("Done.", "debug");

    log("Creating the controller.", "debug");
	
	// Create controller
	controller = new modules.classes.Controller(new modules.classes.UserController(database, tables), new modules.classes.FileController(), new modules.classes.ProjectController());
			
    log("Done.", "debug");
    
	/*database.queryPrep("SELECT * FROM user WHERE Username = ?;", [['michael']], function(err, row) {
		if (err)
			console.log(err);
		else
			console.log(row);
	});*/
			
	// Websocket
	socket.ws.on("connection", function(client) {
		// Initialization of user
		// Creation of the user & Add it to the user controller
		controller.userController.createClient(client, modules.classes.User);
		
		// Listening for any message
		client.on("message", function(data) {
			var message = new modules.classes.Message(JSON.parse(data));

            // TODO: CHECK TO PASS USER ?
			socket.handleMessage(message, client);
		});
		
		// var message = socket.parse(data);
		// socket.handle(message);
	});

    log("Server ready!", "info");
 
	// Cannot work => move on handleMessage
	/*socket.ws.on("leave", function(client) {
		var user = controller.userController.getUser(client);
		userController.removeUser(user);
		console.log("Client removed");
	});*/
}

function includeLogic() {
	// Link config
	modules.config.paths = require("./resources/config/paths.js");
	modules.config.database = require(modules.config.paths.config + "database.js");
	modules.config.global = require(modules.config.paths.config + "global.js");
	modules.config.print = require(modules.config.paths.config + "print.js");
    
    log("Starting CodeJS (v" + modules.config.global.version + ")", "info");
    log("Loading core files", "debug");

	// Link core files
	modules.core.editor = require(modules.config.paths.core + "editor.js");
	modules.core.login = require(modules.config.paths.core + "login.js");
	modules.core.project = require(modules.config.paths.core + "project.js");
	
    log("Done.", "debug");
    log("Loading classes", "debug");
    
	// Link class files
	modules.classes.Controller = require(modules.config.paths.classes + "Controller.js");
	modules.classes.UserController = require(modules.config.paths.classes + "UserController.js");
	modules.classes.FileController = require(modules.config.paths.classes + "FileController.js");
	modules.classes.ProjectController = require(modules.config.paths.classes + "ProjectController.js");
	modules.classes.User = require(modules.config.paths.classes + "User.js");
	modules.classes.File = require(modules.config.paths.classes + "File.js");
	modules.classes.Project = require(modules.config.paths.classes + "Project.js");
	modules.classes.Client = require(modules.config.paths.classes + "Client.js");
	modules.classes.Database = require(modules.config.paths.classes + "Database.js");
	modules.classes.Message = require(modules.config.paths.classes + "Message.js");
	modules.classes.Socket = require(modules.config.paths.classes + "Socket.js");
    
    log("Done.", "debug");
}

global.log = function(message, type, fileName) {
    var colors = modules.config.print.colors;
    
    // Default type is error
    if(!type)
        type = 0;
        
    // If type is debug, check if debug is enabled
    if(type == "debug" && !modules.config.global.debug)
        return;

    if(modules.config.global.debug) {
        // Get the default fileName if not specified
        if(!fileName)
            fileName = module.filename.slice(__filename.lastIndexOf("\\") + 1, module.filename.length);
        
        // Make the filename 10 char long
        if(fileName.length > 10)
            fileName = fileName.substr(0, 9) + " ";
        else
            fileName += ((" ").repeat(10 - fileName.length));
        
        fileName = "" + fileName + colors.reset + "";
    }
    else
        fileName = "";
    
    var message = fileName + colors.bold + message + colors.reset;
    
    // Display the right message
    switch(type) {
        case "err":
        case 0:
            console.log(modules.config.print.messages.error + message);
            break;
        case "info":
        case 1:
            console.log(modules.config.print.messages.info + message);
            break;
        case "warn":
        case 2:
            console.log(modules.config.print.messages.warning + message);
            break;
        case "debug":
        case 3:
            console.log(modules.config.print.messages.debug + message);
            break;
    }


}

// Switch -> redirect core/xx

init();

