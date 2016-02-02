/*
CLASS: Project
DESCRIPTION: Represents a project in CodeJS
*/

function File(name) {
	// Attributes
	this.name = name;
	this.id;
	this.lastModification;
	this.users = [];
	this.files = [];
	this.creationDate = Date.now(); // Check if in seconds
	
	// Methods
	this.getList() {
	};
	this.getUsers() {
	};
	this.addUser(User) {
	};
	this.addFile(File) {
	};
	this.removeUser(User) {
	};
	this.updateLastModifDate(Date) {
	};
	this.rename(name) {
	};
	this.setPermission() {
	};
}