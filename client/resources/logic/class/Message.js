var Message = function(message) {
	if(message) {
		this.data = message.data;
		this.type = message.type;
	}
	
	this.fromJSON = function(msg) {
		msg = JSON.parse(msg);
		this.data = msg.data;
		this.type = msg.type;
	}
	
	this.fromValues = function(type, data) {
		this.type = type;
		this.data = data;
	}
}
