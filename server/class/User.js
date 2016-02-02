/*
CLASS: User
DESCRIPTION: Is a user on CodeJS, extends a NodeJS client
*/

function User() {
	// Attributes
	this.userId;
	this.username;
	this.lastConnection;
	this.lastModified;	// ()
	this.projects = [];
	this.contacts = [];
	
	// Methods
	this.disconnect() {
	};
	this.remove() {
	};
	this.changePassword() {
	};
	this.updateLastConnectionDate(Date) {
	};
}