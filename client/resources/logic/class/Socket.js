var Socket = function() {
	this.ws = "test";
	this.lastReadyState = -1;
    this.hasConnectionSucceed = false;
    this.isConnected = false;
    
	this.init = function() {
		this.ws = new WebSocket("ws://" + CONFIG_SERVER["DEFAULT_IP"] + ":" + CONFIG_SERVER["DEFAULT_PORT"]);
	};
	
	this.handleStateChange = function() {
		/*
			0: connecting
			1: connection ok
			2: request received
            3: error
		*/

		if(!this.ws || this.lastReadyState == this.ws.readyState)
			return;
		switch(this.ws.readyState) {
			case 0:
				break;
			case 1:
                this.isConnected = true;
                this.hasConnectionSucceed = true;
				changePage("login", function(){
					modules.login = new Login();
					modules.login.init();
				});
				break;
			case 3:
                this.isConnected = false;
				changePage("connecting", function(){
					modules.connecting.displayError();
				});
				break;
		}
		
		this.lastReadyState = this.ws.readyState;
        };
	
	this.handleMessage = function(message) {
		var msg = new Message();
        msg.fromJSON(message.data);

		switch(msg.type) {
			case "login-attempt":
                modules.login.handleLogin(msg.data);
				break;
		}
	};
	
	this.sendMessage = function(message) {
		this.ws.send(JSON.stringify({data:message.data, type:message.type}));
	};
}
