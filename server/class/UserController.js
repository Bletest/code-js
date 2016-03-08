/*
CLASS: User Controller
DESCRIPTION: Is the unique handler for users and websocket clients
*/

module.exports = function(database, tables) {
	// Attributes
	this.users = [];
	var userCount = 0;
	this.database = database;
	this.tables = tables;
	
	// Methods
	this.init = function() {
	};
	
	this.createClient = function(client, User) {
		userCount++;
		this.users.push(new User(client, userCount));
		console.log("New client ID: " + userCount);
	};
	
	this.login = function(user) {
		this.database.queryPrep("SELECT " + this.tables.user.fields.pass + ", " + this.tables.user.fields.userId + " FROM " + this.tables.user.name + " WHERE " + this.tables.user.fields.username + " = ?", [user.name], function(err, row) {
			if (err) 
				console.log(err);
			else {
				console.log(row[0]);
				if (user.pass == row[0]) {
					var d = new Date();
					this.database.update(tables.user.fields, [tables.user.fields.lastConnection], [d.getTime()], tables.user.fields.name, user.name);
					this.getUserByClientId(user.clientId).init(this, row[1]);
				}
			}
		});
	};
	
	this.getUser = function(client) {
		for (var i = 0; i < this.users.length; i++) {
			if (this.users[i].client == client)
				return this.users[i];
		}
	};
	
	this.getUserByClientId = function(clientId) {
		for (var i = 0; i < this.users.length; i++) {
			if (this.users[i].clientId == clientId)
				return this.users[i];
		}
	}
	
	this.initUser = function(user) {
		
	};
	
	this.removeUser = function(user) {
		/*user.disconnect();
		user.client.close();*/
		users.splice(users.indexOf(user), 1);
	};
	
	this.getUsernameById = function(userId) {
		this.database.queryPrep("SELECT " + this.tables.user.fields.username + " FROM " + this.tables.user.name + " WHERE " + this.tables.user.fields.userId + " = ?", [userId], function(err, row) {
			if (err) 
				console.log(err);
			else {
				console.log(row[0]);
				return row[0];
			}
		});
	};
	
	this.getLastConnectionById = function(userId) {
		this.database.queryPrep("SELECT " + this.tables.user.fields.lastConnection + " FROM " + this.tables.user.name + " WHERE " + this.tables.user.fields.userId + " = ?", [userId], function(err, row) {
			if (err) 
				console.log(err);
			else {
				console.log(row[0]);
				return row[0];
			}
		});
	};	
};
