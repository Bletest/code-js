/*
CLASS: User
DESCRIPTION: Is a user on CodeJS, extends a NodeJS client
*/

module.exports = function() {
	// Attributes
	this.userId;
	this.username;
	this.lastConnection;
	this.lastModified;	// ()
	this.projects = [];
	this.contacts = [];
	this.client = {};
	
	// Methods
	this.init = function(client) {
		this.client = client;
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