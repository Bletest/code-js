/*
CLASS: User
DESCRIPTION: Is a user on CodeJS, extends a NodeJS client
*/

module.exports = function(client, clientId) {
	// Attributes
	this.clientId = clientId;
	this.userId;
	this.username;
	this.lastConnection;
	this.lastModified;	// ()
	this.projects = [];
	this.contacts = [];
	this.client = client;
	
	// Methods
	this.init = function(userController, userId) {
		this.userId = userId;
		this.username = userController.getUsernameById(this.userId);
		this.lasConnection = userController.getLastConnectionById(this.userId);
	}
	
	this.disconnect = function() {
		
	};
	
	this.remove = function() {
	};
	this.changePassword = function() {
	};
	this.updateLastConnectionDate = function() {
	};
};