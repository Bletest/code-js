
var Connecting = function(){
	this.init = function() {};
	
	this.displayError = function() {
		$("#connection-image").removeClass("loading");
		$("#connection-image").addClass("dead");
		$("#connection-text").text("Cannot reach the server");
		$("#connection-text").css("color", "red");
	};
};
