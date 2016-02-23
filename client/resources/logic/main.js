/*
$("head").append('<link rel="stylesheet" href="resources/ui/styles/editor.css" type="text/css" />');
$("#top-bar").load( "pages/editor.html #page-topbar" );
$("#content").load( "pages/editor.html #page-content" );*/


// Load #top-bar and #content from filename
// Replace #copyright by the copyright text
function changePage(fileName) {
	$("#top-bar").html("");
	$("#content").html("");
	$("#top-bar").load( + " #page-header" );
	$("#top-bar").load( + " #page-content" );
}