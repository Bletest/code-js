var Message = function() {
	this.data;
	this.message;
	
	this.init = function(message) {
		this.data = message.data;
		this.type = message.type;
	};
}
