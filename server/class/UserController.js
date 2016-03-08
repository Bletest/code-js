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
	
	this.createClient = function(client) {
		this.users.push(new modules.classes.User(client));
		userCount++;
	};
	
	this.login = function(user) {
		database.queryPrep("SELECT " + tables.user.fields.pass + ", " + tables.user.fields.userId + " FROM " + tables.user.name + " WHERE " + tables.user.fields.username + " = ?", [user.name], function(err, row) {
			if (err) 
				console.log(err);
			else {
				console.log(row[0]);
				if (user.pass == row[0]) {
					this.getUser(user).init(row[1]); 	// Send userId
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
	
	this.initUser(user) {
		user.
	};
	
	this.removeUser = function(user) {
		/*user.disconnect();
		user.client.close();*/
		users.splice(users.indexOf(user), 1);
	};
	
	this.test = function() {
	};
};
