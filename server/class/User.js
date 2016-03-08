/*
CLASS: User
DESCRIPTION: Is a user on CodeJS, extends a NodeJS client
*/

module.exports = function(client) {
	// Attributes
	this.clientId;
	this.userId;
	this.username;
	this.lastConnection;
	this.lastModified;	// ()
	this.projects = [];
	this.contacts = [];
	this.client = client;
	
	// Methods
	this.init = function(userId) {
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