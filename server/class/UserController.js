/*
CLASS: User Controller
DESCRIPTION: Is the unique handler for users and websocket clients
*/

module.exports = function() {
	// Attributes
	this.users = [];
	
	// Methods
	this.init = function() {
	};
	
	this.getUser = function(client) {
		for (var i = 0; i < users.length; i++) {
			if (users[i].client == client)
				return users[i];
		}
	}
	
	this.removeUser = function(user) {
		/*user.disconnect();
		user.client.close();*/
		users.splice(users.indexOf(user), 1);
	}
	
	this.test = function() {
	};
};
