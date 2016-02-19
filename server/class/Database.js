/*
CLASS: Databas
DESCRIPTION: Handles database interactions
*/

module.exports = function() {	
	// Attributes
	this.fileName = "M:/CodeJS/trunk/server/data/database/CodeDB.db";
	this.sqlite3;
	this.db;
	
	// Methods
	this.init = function(sqlite) {
		this.sqlite3 = require("M:/CodeJS/trunk/server/resources/node_modules/sqlite3").verbose();
		this.db = new this.sqlite3.Database(this.fileName);
	};
	
	// Doesn't work yet
	this.query = function(query) {
		this.db.serialize(function() {
			return this.db.run("SELECT * FROM user;");
		});
	};
};