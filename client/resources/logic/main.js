var login, editor, manager;

/*
Problems with the paths, I had to change them into relatives paths. Michael
*/

// Include the paths config
$.getScript("resources/logic/config/paths.js", function() {
	// Load the config
	// $.getScript(CONFIG_PATHS["config"] + "global.js", function() {
	$.getScript(CONFIG_PATHS["relativeConfig"] + "global.js", function() {
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
	
	// $.getScript(CONFIG_PATHS["core"] + fileName + ".js", onLoadFinished);
	$.getScript(CONFIG_PATHS["relativeCore"] + fileName + ".js", onLoadFinished);
	// Clear page
	$("#top-bar").html("");
	$("#content").html("");
	// Add the style
	// $("head").append('<link rel="stylesheet" href="'+CONFIG_PATHS["styles"] + fileName +'.css" type="text/css" />');
	$("head").append('<link rel="stylesheet" href="'+CONFIG_PATHS["relativeStyles"] + fileName +'.css" type="text/css" />');
	// $("#top-bar").load(CONFIG_PATHS["pages"] + fileName + CONFIG_GLOBAL["htmlExtension"] + " #page-header", onLoadFinished);
	$("#top-bar").load(CONFIG_PATHS["relativePages"] + fileName + CONFIG_GLOBAL["htmlExtension"] + " #page-header", onLoadFinished);
	//$("#content").load(CONFIG_PATHS["pages"] + fileName + CONFIG_GLOBAL["htmlExtension"] + " #page-content", onLoadFinished);
	$("#content").load(CONFIG_PATHS["relativePages"] + fileName + CONFIG_GLOBAL["htmlExtension"] + " #page-content", onLoadFinished);
}

