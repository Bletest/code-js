var login, editor, manager, connecting, socket;
var ws, lastReadyState;

// Include the paths config
$.getScript("resources/logic/config/paths.js", function() {
	// Load the config
	$.getScript(CONFIG_PATHS["config"] + "global.js", function() {
		// When the config is loaded, changePage
		changePage("connecting", function(){
			connecting = new Connecting();
			connecting.init();
		});
	});
	
	$.getScript(CONFIG_PATHS["config"] + "default-server.js", function(){
		$.getScript(CONFIG_PATHS["class"] + "Socket.js", function(){
			socket = new Socket();
			socket.init();
			setInterval(socket.handleStateChange, 50);
		});
	});
});


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
		$("head").append('<script src="resources/logic/tools/codemirror-5.12/mode/javascript/javascript.js"></script>');
		$("head").append('<script src="'+CONFIG_PATHS["core"]+'editor.js"></script>');
		$("head").append('<script src="'+CONFIG_PATHS["tools"]+'codemirror-5.12/mode/javascript/javascript.js"></script>');
		$("head").append('<link rel="stylesheet" href="'+CONFIG_PATHS["tools"]+'codemirror-5.12/lib/codemirror.css" type="text/css" />');
		$("head").append('<link rel="stylesheet" href="'+CONFIG_PATHS["tools"]+'codemirror-5.12/theme/3024-day.css" type="text/css" />');
	}
	
	$("#top-bar").load(CONFIG_PATHS["pages"] + fileName + CONFIG_GLOBAL["htmlExtension"] + " #page-header", onLoadFinished);
	$("#content").load(CONFIG_PATHS["pages"] + fileName + CONFIG_GLOBAL["htmlExtension"] + " #page-content", onLoadFinished);
}

