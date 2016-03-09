var colors = {
    red: "\033[31m",
    green: "\033[32m",
    magenta: "\033[35m",
    blue: "\033[36m",
    white: "\033[37m"
};

var messages = {
    info: colors.green +   "[INFO]    " + colors.white,
    error: colors.red +    "[ERROR]   " + colors.white,
    warning: colors.blue + "[WARNING] " + colors.white,
    debug: colors.magenta +"[DEBUG]   " + colors.white
};

module.exports = {
	websocket: {
		port: 49111
	},
    debug: true,
    color: colors,
    messages: messages
}