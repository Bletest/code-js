/*
CLASS: Project
DESCRIPTION: Represents a project in CodeJS
*/

module.exports = function() {
	// Attributes
	this.name;
	this.id;
	this.lastModification;
	this.users = [];
	this.files = [];
	this.creationDate = Date.now(); // Check if in seconds
	
	// Methods
	this.getList = function() {
	};
	this.getUsers = function() {
	};
	this.addUser = function(User) {
	};
	this.addFile = function(File) {
	};
	this.removeUser = function(User) {
	};
	this.updateLastModifDate = function() {
	};
	this.rename = function(name) {
	};
	this.setPermission = function() {
	};
};