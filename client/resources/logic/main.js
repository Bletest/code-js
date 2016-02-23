
var login, editor, manager;

// Include the paths config
$.getScript("resources/logic/config/paths.js", function() {
	// Load the config
	$.getScript(CONFIG_PATHS["config"] + "global.js", function() {
		// When the config is loaded, changePage
		changePage("login", function(){
			// When  the login is loaded,
			login = new Login();
			login.init();
		});
	});
	
	$.getScript(CONFIG_PATHS["config"] + "default-server.js");
	
});

// Load #top-bar and #content from filename
function changePage(fileName, callBack) {
	var elementToLoad = 3;
	var elementLoaded = 0;
	var onLoadFinished = function() {
		if(++elementLoaded == 3) {
			console.log("changePage: Loaded " + fileName);
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
	$("#top-bar").load(CONFIG_PATHS["pages"] + fileName + CONFIG_GLOBAL["htmlExtension"] + " #page-header", onLoadFinished);
	$("#content").load(CONFIG_PATHS["pages"] + fileName + CONFIG_GLOBAL["htmlExtension"] + " #page-content", onLoadFinished);
}

