/*
CLASS: File
DESCRIPTION: Represents a file in CodeJS
*/

module.exports = function() {
	// Attributes
	this.name;
	this.id;
	this.lastModification;
	this.currentUsers = [];
	this.creationDate = Date.now(); // Check if in seconds
	this.isFolder;
	
	// Methods
	this.getCurrentUsers = function() {
	};
	this.addCurrentUser = function(User) {
	};
	this.removeCurrentUser = function(User) {
	};
	this.updateLastModifDate = function() {
	};
	this.rename = function(name) {
	};
	this.edit = function() {
	};
};