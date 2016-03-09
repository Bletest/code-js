/*
CLASS: Socket
DESCRIPTION: Socket object
*/

module.exports = function() {
	// Attributes
	this.ws;
	this.clients = [];
	
	// Methods
	this.init = function(portNumber) {
		var WebSocket = require('./../resources/node_modules/ws').Server;
		this.ws = new WebSocket({port: portNumber});
		log("Websocket created", "debug", "Socket.js");
	};
	
	this.handleMessage = function(message, client) {
        log("["+message.type+"] " + JSON.stringify(message.data), "debug", "Socket.js");
        
		switch (message.type) {
			case "login":
				controller.userController.login(message.data, client);
				break;
			case "user-leave": 
				controller.userController.removeUser(message.data.user);
				break;
		}
	}
	
	this.sendMessage = function(client, message) {
		try {
			client.send(JSON.stringify({type: message.type, data: message.data}));
		} catch (e) {}
	};
	
	this.broadcast = function() {
	};
	this.parse = function(message) {
		
	};
	this.createClient = function() {
	};
	this.handle = function() {
	};
};