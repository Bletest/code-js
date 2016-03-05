var CONFIG_PATHS = {};

CONFIG_PATHS["root"] = "/trunk/client/";
CONFIG_PATHS["resources"]		= CONFIG_PATHS["root"] 		+ "resources/";
CONFIG_PATHS["pages"] 			= CONFIG_PATHS["root"] 		+ "pages/";
CONFIG_PATHS["ui"] 				= CONFIG_PATHS["resources"] + "ui/";
CONFIG_PATHS["logic"] 			= CONFIG_PATHS["resources"] + "logic/";
CONFIG_PATHS["core"] 			= CONFIG_PATHS["logic"] 	+ "core/";
CONFIG_PATHS["config"]			= CONFIG_PATHS["logic"] 	+ "config/";
CONFIG_PATHS["tools"] 			= CONFIG_PATHS["logic"]		+ "tools/";
CONFIG_PATHS["images"] 			= CONFIG_PATHS["ui"] 		+ "images/";
CONFIG_PATHS["styles"] 			= CONFIG_PATHS["ui"]		+ "styles/";

CONFIG_PATHS["relativeConfig"]  = "resources/logic/config/";
CONFIG_PATHS["relativeCore"]  = "resources/logic/core/";
CONFIG_PATHS["relativeStyles"]  = "resources/ui/styles/";
CONFIG_PATHS["relativePages"]  = "pages/";