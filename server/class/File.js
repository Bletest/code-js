/*
CLASS: File
DESCRIPTION: Represents a file in CodeJS
*/

function File(name, isFolder) {
	// Attributes
	this.name = name;
	this.id;
	this.lastModification;
	this.currentUsers = [];
	this.creationDate = Date.now(); // Check if in seconds
	this.isFolder = isFolder;
	
	// Methods
	this.getCurrentUsers() {
	};
	this.addCurrentUser(User) {
	};
	this.removeCurrentUser(User) {
	};
	this.updateLastModifDate(Date) {
	};
	this.rename(name) {
	};
	this.edit() {
	};
}