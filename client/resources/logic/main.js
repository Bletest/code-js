var login, editor, manager;
var ws, lastReadyState;

// Include the paths config
$.getScript("resources/logic/config/paths.js", function() {
	// Load the config
	$.getScript(CONFIG_PATHS["config"] + "global.js", function() {
		// When the config is loaded, changePage
		changePage("connecting");
	});
	
	$.getScript(CONFIG_PATHS["config"] + "default-server.js", function(){
		ws = new WebSocket("ws://" + CONFIG_SERVER["DEFAULT_IP"] + ":" + CONFIG_SERVER["DEFAULT_PORT"]);
	});
});

setInterval(handleConnectionStateChange, 50);

function handleConnectionStateChange() {
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
			$("#connection-image").removeClass("loading");
			$("#connection-image").addClass("dead");
			$("#connection-text").text("Cannot reach the server");
			$("#connection-text").css("color", "red");
			break;
	}
	
	lastReadyState = ws.readyState;
}

// Load #top-bar and #content from filename
// Probably a good idea to move on a tool.js
function changePage(fileName, callBack) {
	var elementToLoad = 3;
	var elementLoaded = 0;
	var onLoadFinished = function() {
		if(++elementLoaded == 3) {
			console.log("Loaded " + fileName);
			if(callBack)
				callBack();
		}
	}
	
	$.getScript(CONFIG_PATHS["core"] + fileName + ".js", onLoadFinished);

	// Clear page
	$("#top-bar").html("");
	$("#content").html("");
	// Add the style
	$("head").append('<link rel="stylesheet" href="'+CONFIG_PATHS["styles"] + fileName +'.css" type="text/css" />');

	if (fileName == "editor") {
		$("head").append('<script src="resources/logic/tools/codemirror-5.12/lib/codemirror.js"></script>');
		$("head").append('<script src="resources/logic/core/editor.js"></script>');
		$("head").append('<link rel="stylesheet" href="resources/logic/tools/codemirror-5.12/lib/codemirror.css" type="text/css" />');
		$("head").append('<script src="resources/logic/tools/codemirror-5.12/mode/javascript/javascript.js"></script>');
	}
	
	$("#top-bar").load(CONFIG_PATHS["pages"] + fileName + CONFIG_GLOBAL["htmlExtension"] + " #page-header", onLoadFinished);
	$("#content").load(CONFIG_PATHS["pages"] + fileName + CONFIG_GLOBAL["htmlExtension"] + " #page-content", onLoadFinished);
}

