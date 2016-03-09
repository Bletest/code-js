
var Connecting = function(){
	this.init = function() {};
	
	this.displayError = function() {
        console.log(modules.socket.hasConnectionSucceed);
        $("#connection-text").css("color", "red");
        $("#connection-image").addClass("dead");
        $("#connection-image").removeClass("loading");
        $("#connection-text").removeClass("rotating");
        
        if(!modules.socket.hasConnectionSucceed)
            $("#connection-text").text("Cannot reach the server");
        else
            $("#connection-text").text("Connection lost");

	};
	
	this.login = function() {
		
	}
};
