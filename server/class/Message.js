/*
CLASS: Message
DESCRIPTION: Socket message handler
*/

module.exports = function(message) {
	// Attributes
	this.type = message.type;
	this.data = message.data;
};