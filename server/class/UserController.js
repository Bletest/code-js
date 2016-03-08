/*
CLASS: User Controller
DESCRIPTION: Is the unique handler for users and websocket clients
*/

module.exports = function() {
	// Attributes
	this.users = [];
	var userCount = 0;
	
	// Methods
	this.init = function() {
	};
	
	this.createClient = function(client, User) {
		userCount++;
		this.users.push(new User(client, userCount));
		console.log("New client ID: " + userCount);
	};
	
	this.login = function(user) {
		database.queryPrep("SELECT " + tables.user.fields.pass + ", " + tables.user.fields.userId + " FROM " + tables.user.name + " WHERE " + tables.user.fields.username + " = ?", [user.name], function(err, row) {
			if (err) 
				console.log(err);
			else {
				console.log(row[0]);
				if (user.pass == row[0]) {
					this.getUserByClientId(user.clientId).init(row[1]);
				}
			}
		});
	};
	
	this.getUser = function(client) {
		for (var i = 0; i < users.length; i++) {
			if (users[i].client == client)
				return users[i];
		}
	};
	
	this.getUserByClientId = function(clientId) {
		
	}
	
	this.initUser = function(user) {
	};
	
	this.removeUser = function(user) {
		/*user.disconnect();
		user.client.close();*/
		users.splice(users.indexOf(user), 1);
	};
	
	this.test = function() {
	};
};
