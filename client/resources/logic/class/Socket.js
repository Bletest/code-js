var Socket = function() {
	this.ws = "test";
	this.lastReadyState = -1;

	this.init = function() {
		this.ws = new WebSocket("ws://" + CONFIG_SERVER["DEFAULT_IP"] + ":" + CONFIG_SERVER["DEFAULT_PORT"]);
	};
	
	this.handleStateChange = function() {
		/*
			0: connecting
			1: connection ok
			2: request received
		*/

		if(!this.ws || this.lastReadyState == this.ws.readyState)
			return;
		switch(this.ws.readyState) {
			case 0:
				$("#connection-image").addClass("loading");
				break;
			case 1:
				changePage("login", function(){
					modules.login = new Login();
					modules.login.init();
				});
				break;
			case 3:
				changePage("connecting", function(){
					modules.connecting.displayError();
				});
				break;
		}
		
		this.lastReadyState = this.ws.readyState;
	};
	
	this.handleMessage = function(message) {
		console.log(message);
		var message = new Message();

		switch(message.type) {
			case "":
				// asd
				break;
		}
	};
	
	this.sendMessage = function(message) {
		this.ws.send(JSON.stringify({data:message.data, type:message.type}));
	};
}
