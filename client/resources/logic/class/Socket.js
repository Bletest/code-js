var Socket = function() {
	this.init = function() {
		ws = new WebSocket("ws://" + CONFIG_SERVER["DEFAULT_IP"] + ":" + CONFIG_SERVER["DEFAULT_PORT"]);
	};
	
	this.handleStateChange = function() {
		/*
			0: connecting
			1: connection ok
			2: request received
		*/
		if(lastReadyState == ws.readyState)
			return;
		
		switch(ws.readyState) {
			case 0:
				$("#connection-image").addClass("loading");
				break;
			case 1:
				changePage("login", function(){
					login = new Login();
					login.init();
				});
				break;
			case 3:
				changePage("connecting", function(){
					connecting.displayError();
				});
				break;
		}
		
		lastReadyState = ws.readyState;
	};
}
