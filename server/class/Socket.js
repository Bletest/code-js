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
		console.log("Websocket created");
	};	
	
	this.sendMessage = function(client, message) {
		try {
			client.send(JSON.stringify({type: message.type, data: message.data});
		} catch (e) {}
	};
	
	this.broadcast = function() {
	};
	this.parse = function(data) {
	};
	this.createClient = function() {
	};
	this.handle = function() {
	};
};